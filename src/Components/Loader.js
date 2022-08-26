import "./loader.css";
import logo from './logo.svg'

export default function Loader(props){
    return(
        <div>
            <h2>{props.children}...</h2>
            <img src={logo} className='loader' alt='loader'/>
        </div>
    )
}