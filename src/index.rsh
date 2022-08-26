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
