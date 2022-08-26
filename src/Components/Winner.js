import "./winner.scss";


export default function Winner({winner, playAgain}){
    return(
        <div>
            <p>You { !winner && 'Both'} Win</p>
            <button onClick={playAgain}> Play again </button>
        </div>
    )
}