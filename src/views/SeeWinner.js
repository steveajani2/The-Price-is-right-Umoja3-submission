import Winner from "../Components/Winner";
import Loser from "../Components/Loser";

export function SeeWinner({outcome, isAlice, playAgain, overall}){
    console.log(outcome)
    return(
        overall ? 
        <div>
            {
                outcome === 2 ? isAlice ? <Loser /> :  <Winner winner={true}/> : null
            }

            {
                outcome === 3 && <Winner winner={false} playAgain={playAgain}/>
            }

            {
                outcome === 0 && 
                <div>
                    <p>You Both Lose</p>
                    <button onClick={playAgain}> Play again </button>
                </div>
            }

            {
                outcome === 1 ? isAlice ? <Winner winner={true} playAgain={playAgain}/> :  <Loser /> : null
            }
        </div>
        :
        <div>
            <h3>
                {
                    outcome === 1 ? isAlice ? 'You win this round' : 'You lost this round' : null
                }
                {
                    outcome === 2 ? isAlice ? 'You lost this round' : 'You won this round' : null
                }
                {
                    outcome === 3 ? 'You both guessed right' : null
                }
                {
                    outcome === 0 ? 'You both guessed wrong' : null
                }
            </h3>
            <h3>Please wait...</h3>
        </div>
    )
}