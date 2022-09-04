<p align="center">
  <a href="" rel="noopener">
 <img src="https://docs.reach.sh/assets/logo.png" alt="Project logo"></a>
</p>
<h3 align="center">Price is right</h3>

<div align="center">


</div>

---

<p align="center"> Workshop : Price is right
    <br> 
</p>

The price is right is a fun game that can be played with two or more people, but in the decentralized application (Dapp for short) i wrote using Reachlang its played by just two player.
# Languages 
* `Reach` : for the smart contract development
* `Javascript` : for the frontend development
* `Python` : for testing the smart contract

# Logic
The game consist of 3 participants, the house and the two players. The house proposes a wager for the two players to accept or decline, the house picks a number for the two playes to try and guess whoever guesses the number is the winner and get the wager present in the pot. The game gives each player 3 chances each to try and guess the number, but in a situation a player guesses the number in the second round or even in the first round they become the winner.
I had a lot of fun writing this hope it will be the same for you, lets go!!

```js
'reach 0.1'
const all_shared = {
    ...hasRandom,
    seeOverallOutcome: Fun([UInt], Null)
}
const player_shared_functions = {
    seeOutcome: Fun([UInt], Null),
    informtimeout: Fun([UInt], Null),
    submit_guess: Fun([], UInt),
    Acceptwager: Fun([UInt], UInt),
    round: Fun([], Null)
}
export const main = Reach.App(() => {
    const House = Participant('House', {
        ...all_shared,
        wager: UInt,
        deadline: UInt,
        number_guess: Fun([], UInt)
    })
    const Alice = Participant('Alice', {
        ...player_shared_functions,
        ...all_shared,
    });

    const Bob = Participant('Bob', {
        ...player_shared_functions,
        ...all_shared,
    });
    init();
})
```
Writing out the version of reach is the first thing to do when writing a reach program which we have done above.
* We define the similar functions shared by the participants and store them on their respective variables
* The next step is to create the reach function and define the participants of the game and their respective functions
* The init() is used to initialize the reach application

```js
House.only(() => {
        const wager = declassify(interact.wager)
        const deadline = declassify(interact.deadline)
    })
House.publish(wager, deadline)
    commit()

const InformTimeout = () => {
        each([Alice, Bob], () => {
            interact.informtimeout(deadline);
        })
    }

const newRound = () => {
        each([Alice, Bob], () => {
            interact.round();
        })
    }

const seeOverall = (outcome) => {
        each([Alice, Bob, House], () => {
            interact.seeOverallOutcome(outcome);
        })
    }
```
* We make ouyr first publication of the contract by publishing the wager and the deadline
* We then created some reuseable functions to be sused in the program 
`informTimeout()` : It informs the players of the timeout of the contract
`newRound()` : notifies both players of a new round
`seeeOverall()` : shows all the participants the overall outcome of the game

```js
Alice.only(() => {
        const aliceacceptwager = declassify(interact.Acceptwager(wager))
    })
Alice.publish(aliceacceptwager)
        .pay(wager)
commit()

Bob.only(() => {
        const bobacceptwager = declassify(interact.Acceptwager(wager))
    })
Bob.publish(bobacceptwager)
        .timeout(relativeTime(deadline), () => closeTo(Alice, InformTimeout))
```
In the code block above we ask both players to accept the wager and the answer that's return we then publish it
* `timeout()` : This timeout function is an inbuilt reach function the ends the contract after the specified deadline is reached and transfers whatever funds thats present to the specified participant. 
In this case we wait for bob's answer if bob fails to reply and the deadline is reached the funds are transfered to alice.

```js
if (aliceacceptwager == 1 && bobacceptwager == 1) {
        commit()
        
        Bob.pay(wager)
        const round_outcome = (main_num, guessnum1, guessnum2) => {
            const outcome =
                main_num == guessnum1 && main_num != guessnum2 ? 1 :
                    main_num == guessnum2 && main_num != guessnum1 ? 2 :
                        main_num == guessnum2 && main_num == guessnum1 ? 3 :
                            0
            return outcome
        }

        const overallOutcome = (a, b, h) => {
            if(a==2){
                return 1
            }
            else if(b==2){
                return 2
            }
            else if(a==1){
                return 3
            }
            else {
                return 0
            }
        }
}
```
We use an if statement to check if both players accepted the wager, if they did we enter the game, if they didn't we transfer their wagers back to them and exit the application
Assuming they both agree we write to functions 
* `round_outcome()` : Checks for the winner of each round
* `overallOutcome()`: Checks for the overall outcome of all the rounds

The next code block is going to be a big bigger than the previous ones in this workshop, simply because it contains the main logic of the game and uses all the functions and parameters defined above.

```js
var [forAlice, forBob, forHouse, i] = [0, 0, 0, 0]
        invariant(balance() == wager * 2)
        while (i < 3 && forAlice != 2 && forBob != 2) {
            commit()
            House.only(() => {
                const _guessnumber = interact.number_guess()
                const [_commitHouse, _saltHouse] = makeCommitment(interact, _guessnumber);
                const HouseCommit = declassify(_commitHouse)
            })
            House.publish(HouseCommit)
            commit()
            unknowable(Alice, House(_guessnumber, _saltHouse))
            unknowable(Bob, House(_guessnumber, _saltHouse))

            newRound()
            
            Alice.only(() => {
                const _getguess = interact.submit_guess()
                const [_commitAlice, _saltAlice] = makeCommitment(interact, _getguess);
                const AliceCommit = declassify(_commitAlice)
            })
            Alice.publish(AliceCommit)
            commit()
            unknowable(Bob, Alice(_getguess, _saltAlice))
            Bob.only(() => {
                const bob_guess = declassify(interact.submit_guess())
            })
            Bob.publish(bob_guess)
            commit()

            Alice.only(() => {
                const saltAlice = declassify(_saltAlice)
                const alice_guess = declassify(_getguess)
            })
            Alice.publish(saltAlice, alice_guess)
            checkCommitment(AliceCommit, saltAlice, alice_guess)
            commit()

            House.only(() => {
                const saltHouse = declassify(_saltHouse)
                const guessnumber = declassify(_guessnumber)
            })
            House.publish(saltHouse, guessnumber)
            checkCommitment(HouseCommit, saltHouse, guessnumber)
            const outcome = round_outcome(guessnumber, alice_guess, bob_guess)
            each([Alice, Bob], () => {
                interact.seeOutcome(outcome);
            })
            if (guessnumber == alice_guess && guessnumber != bob_guess) {
                [forAlice, forBob, forHouse, i] = [2, 0, 0, i + 1]
                continue
            } else {
                if (guessnumber == bob_guess && guessnumber != alice_guess) {
                    [forAlice, forBob, forHouse, i] = [0, 2, 0, i + 1]
                    continue
                } else {
                    if (guessnumber == bob_guess && guessnumber == alice_guess) {
                        [forAlice, forBob, forHouse, i] = [1, 1, 0, i + 1]
                        continue
                    } else {
                        [forAlice, forBob, forHouse, i] = [0, 0, 2, i + 1]
                        continue
                    }
                   
                }
            }

        }
```
* `var` : This is used to make variables mutable in the while loop, In reach the variables are immutable which means they can't be change. We use this to make certain variables mutable so we could update them in the while loop
* `continue` : we use the continue after every incrementation or change in the mutable variables
* `invariant ` : we use to invariant to ensure that the balance remains the same in the loop
The while loop has 3 conditions 
* The first condition allows the the loop to run for 3 rounds as long as they is no winner
* The second and third condition ends the loop if either bob or alice guesses the number
We use this functions to ensure no one cheats 
* `makeCommitment()` : this is used to make the commitment for the value we are yet to declassify and publish to the contract
* `unknowable()` : The unknowable makes sure none of the participants in the contract knows the value been hidden
* `checkCommitment` : This is used to check the commitment made above to ensure it wasn't tampered with.
This functions are used inside the loop to hide the number the two players are trying to guess every round.
we also use if to hide alice number guess to ensure bob does dopy their every move. After each player has submitted their guess we check if they is a winner, in absece of a winner the house participant produces a new number to be guessed till the third round. 

```js
const [a, b, h] =
            forAlice > forBob ? [2, 0, 0] :
                forAlice < forBob ? [0, 2, 0] :
                    forAlice == forBob ? [1, 1, 0] :
                        [0, 0, 2]
        const overall = overallOutcome(a, b, h)
        seeOverall(overall)

        transfer(wager * a).to(Alice)
        transfer(wager * b).to(Bob)
        transfer(wager * h).to(House)
```
Based on the outcome of the game we distribute payout to the winner, this is done by using the transfer() function
`transfer()` : Transfers a desired amount to the address or participant selected 

Full index.rsh file
```js
'reach 0.1'
const all_shared = {
    ...hasRandom,
    seeOverallOutcome: Fun([UInt], Null)
}
const player_shared_functions = {
    seeOutcome: Fun([UInt], Null),
    informtimeout: Fun([UInt], Null),
    submit_guess: Fun([], UInt),
    Acceptwager: Fun([UInt], UInt),
    round: Fun([], Null)
}
export const main = Reach.App(() => {
    const House = Participant('House', {
        ...all_shared,
        wager: UInt,
        deadline: UInt,
        number_guess: Fun([], UInt)
    })
    const Alice = Participant('Alice', {
        ...player_shared_functions,
        ...all_shared,
    });

    const Bob = Participant('Bob', {
        ...player_shared_functions,
        ...all_shared,
    });
    init();
    House.only(() => {
        const wager = declassify(interact.wager)
        const deadline = declassify(interact.deadline)
    })
    House.publish(wager, deadline)
    commit()

    const InformTimeout = () => {
        each([Alice, Bob], () => {
            interact.informtimeout(deadline);
        })
    }

    const newRound = () => {
        each([Alice, Bob], () => {
            interact.round();
        })
    }

    const seeOverall = (outcome) => {
        each([Alice, Bob, House], () => {
            interact.seeOverallOutcome(outcome);
        })
    }
    Alice.only(() => {
        const aliceacceptwager = declassify(interact.Acceptwager(wager))
    })
    Alice.publish(aliceacceptwager)
        .pay(wager)
    commit()

    Bob.only(() => {
        const bobacceptwager = declassify(interact.Acceptwager(wager))
    })
    Bob.publish(bobacceptwager)
        .timeout(relativeTime(deadline), () => closeTo(Alice, InformTimeout))
    if (aliceacceptwager == 1 && bobacceptwager == 1) {
        commit()
        
        Bob.pay(wager)
        const round_outcome = (main_num, guessnum1, guessnum2) => {
            const outcome =
                main_num == guessnum1 && main_num != guessnum2 ? 1 :
                    main_num == guessnum2 && main_num != guessnum1 ? 2 :
                        main_num == guessnum2 && main_num == guessnum1 ? 3 :
                            0
            return outcome
        }

        const overallOutcome = (a, b, h) => {
            if(a==2){
                return 1
            }
            else if(b==2){
                return 2
            }
            else if(a==1){
                return 3
            }
            else {
                return 0
            }
        }
        var [forAlice, forBob, forHouse, i] = [0, 0, 0, 0]
        invariant(balance() == wager * 2)
        while (i < 3 && forAlice != 2 && forBob != 2) {
            commit()
            House.only(() => {
                const _guessnumber = interact.number_guess()
                const [_commitHouse, _saltHouse] = makeCommitment(interact, _guessnumber);
                const HouseCommit = declassify(_commitHouse)
            })
            House.publish(HouseCommit)
            commit()
            unknowable(Alice, House(_guessnumber, _saltHouse))
            unknowable(Bob, House(_guessnumber, _saltHouse))

            newRound()
            
            Alice.only(() => {
                const _getguess = interact.submit_guess()
                const [_commitAlice, _saltAlice] = makeCommitment(interact, _getguess);
                const AliceCommit = declassify(_commitAlice)
            })
            Alice.publish(AliceCommit)
            commit()
            unknowable(Bob, Alice(_getguess, _saltAlice))
            Bob.only(() => {
                const bob_guess = declassify(interact.submit_guess())
            })
            Bob.publish(bob_guess)
            commit()

            Alice.only(() => {
                const saltAlice = declassify(_saltAlice)
                const alice_guess = declassify(_getguess)
            })
            Alice.publish(saltAlice, alice_guess)
            checkCommitment(AliceCommit, saltAlice, alice_guess)
            commit()

            House.only(() => {
                const saltHouse = declassify(_saltHouse)
                const guessnumber = declassify(_guessnumber)
            })
            House.publish(saltHouse, guessnumber)
            checkCommitment(HouseCommit, saltHouse, guessnumber)
            const outcome = round_outcome(guessnumber, alice_guess, bob_guess)
            each([Alice, Bob], () => {
                interact.seeOutcome(outcome);
            })
            if (guessnumber == alice_guess && guessnumber != bob_guess) {
                [forAlice, forBob, forHouse, i] = [2, 0, 0, i + 1]
                continue
            } else {
                if (guessnumber == bob_guess && guessnumber != alice_guess) {
                    [forAlice, forBob, forHouse, i] = [0, 2, 0, i + 1]
                    continue
                } else {
                    if (guessnumber == bob_guess && guessnumber == alice_guess) {
                        [forAlice, forBob, forHouse, i] = [1, 1, 0, i + 1]
                        continue
                    } else {
                        [forAlice, forBob, forHouse, i] = [0, 0, 2, i + 1]
                        continue
                    }
                   
                }
            }

        }
        const [a, b, h] =
            forAlice > forBob ? [2, 0, 0] :
                forAlice < forBob ? [0, 2, 0] :
                    forAlice == forBob ? [1, 1, 0] :
                        [0, 0, 2]
        const overall = overallOutcome(a, b, h)
        seeOverall(overall)

        transfer(wager * a).to(Alice)
        transfer(wager * b).to(Bob)
        transfer(wager * h).to(House)

    } else {
        transfer(balance()).to(Alice)
    }
    commit();


});
```

Full index.py file for testing
```py
from threading import Thread
from reach_rpc import mk_rpc
import time
def main():
    rpc, rpc_callbacks = mk_rpc()

    starting_balance = rpc("/stdlib/parseCurrency", 6000)
    names = ['House','Alice', 'Bob']
    acc_house = rpc("/stdlib/newTestAccount", starting_balance)
    acc_alice = rpc("/stdlib/newTestAccount", starting_balance)
    acc_bob = rpc("/stdlib/newTestAccount",starting_balance )

    def fmt(x):
        return rpc("/stdlib/formatCurrency", x, 4)

    def get_balance(w):
        return fmt(rpc("/stdlib/balanceOf", w))

    before_alice = get_balance(acc_alice)
    before_bob = get_balance(acc_bob)
    before_house = get_balance(acc_house)

    print("%s starting balance is %s algo" %(names[0],before_house))
    print("%s starting balance is %s algo"%(names[1],before_alice))
    print("%s starting balance is %s algo"%(names[2],before_bob))

    ctc_house = rpc("/acc/contract", acc_house)
    def alll():
        return {
            "stdlib.hasRandom": True,
        }

    def house_func():
        wager = int(input('enter wager for players to deposit'))
        deadline = int(input('enter deadline'))
        def number_guess():
            num = int(input('enter number for players to guess'))
            return num
        rpc_callbacks(
            "/backend/House",
            ctc_house,
            dict(
                wager = rpc("/stdlib/parseCurrency",wager), deadline = deadline,number_guess = number_guess, **alll()
            )
        )
    house = Thread(target=house_func)
    house.start()

    def alice_func():
        def submit_guess():
            guess = int(input('enter your guess alice'))
            return guess
        def Acceptwager(num):
            choice = input('Alice do you accept the wager and the terms of the game 1 for yes, 0 for no')
            return int(choice)
    
        def informtimeout(t):
            print('Alice the timeout is %s'%f)

        def seeOutcome(a):
            O = rpc("/stdlib/bigNumberToNumber", a)
            if O == 1:
                print('Alice wins!')
            elif O == 2:
                print('Bob wins')
            elif O == 3:
                print('Alice and Bob guessed the number, it is a draw')
            elif O == 0:
                print('Alice and Bob Both failed to guess the game, House wins this round!')
        ctc_alice = rpc("/acc/contract", acc_alice, rpc("/ctc/getInfo", ctc_house))   
        rpc_callbacks(
            "/backend/Alice",
            ctc_alice,
            dict(
                informtimeout = informtimeout, submit_guess = submit_guess, Acceptwager = Acceptwager,seeOutcome = seeOutcome ,**alll()
            )
        )
        rpc("/forget/ctc", ctc_alice)
    alice = Thread(target=alice_func)
    alice.start()

    def bob_func():
        def submit_guess():
            guess = int(input('enter your guess bob'))
            return guess
        def Acceptwager(num):
            choice = input('Bob do you accept the wager and the terms of the game 1 for yes, 0 for no')
            return int(choice)
    
        def informtimeout(t):
            print('Bob the timeout is %s'%f)
        def seeOutcome(a):
            O = rpc("/stdlib/bigNumberToNumber", a)
            if O == 1:
                print('Alice wins!')
            elif O == 2:
                print('Bob wins')
            elif O == 3:
                print('Alice and Bob guessed the number, it is a draw')
            elif O == 0:
                print('Alice and Bob Both failed to guess the game, House wins!')
        ctc_bob = rpc("/acc/contract", acc_bob, rpc("/ctc/getInfo", ctc_house))   
        rpc_callbacks(
            "/backend/Bob",
            ctc_bob,
            dict(
                informtimeout = informtimeout, submit_guess = submit_guess, Acceptwager = Acceptwager,seeOutcome = seeOutcome , **alll()
            )
        )
        rpc("/forget/ctc", ctc_bob)
    bob = Thread(target=bob_func)
    bob.start()

    house.join()
    alice.join()
    bob.join()

    after_alice = get_balance(acc_alice)
    after_bob = get_balance(acc_bob)
    after_house = get_balance(acc_house)

    print("%s starting balance is %s algo" %(names[0],after_house))
    print("%s starting balance is %s algo"%(names[1],after_alice))
    print("%s starting balance is %s algo"%(names[2],after_bob))

    rpc("/forget/acc", acc_alice, acc_bob)
    rpc("/forget/ctc", ctc_house)


if __name__ == "__main__":
    main()
```
