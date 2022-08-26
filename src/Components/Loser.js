import './loser.css';

export default function Loser({playAgain}){
    return(
        <div>
            <p>You lose</p>
            <button onClick={playAgain}>Play Again</button>
        </div>
    )
}