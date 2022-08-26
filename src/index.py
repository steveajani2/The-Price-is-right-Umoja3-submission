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
