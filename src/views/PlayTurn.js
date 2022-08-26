import { useState } from "react";
import './index.scss';

const initialSelected = new Array(11);
initialSelected.fill(false);

export function PlayTurn({guess, played, round}){
    const [ hand, setHand ] = useState(0);

    const onChange = event => {
        const value = parseInt(event.target.value);
        setHand(value);
    }

    const handleSubmit = () => {
        if(parseInt(hand) > 0 && parseInt(hand) <= 15){
            guess(parseInt(hand));
            played()
        }
    }

    return(
        <div>
            {
                round <= 1  ? 
                    <>
                        <h3>You have 3 guesses to guess our secret number between 1 and 15!! </h3>
                        <h3>Make your guess</h3>
                    </> :
                    <h3>Wrong Guess: Guess Again!</h3>
            }
                <input 
                    value={hand}
                    onChange={onChange}
                    type={'number'}
                />
                <button onClick={handleSubmit}>Submit Guess</button>

            <div>

            </div>
            
        </div>
    )
}