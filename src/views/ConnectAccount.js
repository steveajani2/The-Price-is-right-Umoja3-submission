

export function ConnectAccount({connect}){

    return(
        <div>
            <button onClick={() => connect()}>Connect To Wallet</button>
        </div>
    );
};