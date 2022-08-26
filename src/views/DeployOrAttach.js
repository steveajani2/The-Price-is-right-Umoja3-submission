import { useState } from "react";

export function DeployOrAttach({ setAsAlice, deploy }){
    const [ wager, setWager ] = useState(0)
    const [ d, setD ] = useState(false)
    return(
        <div className="center">
            {
                d ? 
                <>
                    <div className="form-row">
                        <label className="flex-50">Wager: </label>
                        <input
                            className="flex-50"
                            type={'number'}
                            value={wager}
                            onChange={e => setWager(e.target.value)}
                        />
                    </div>

                    <button onClick={() => deploy(parseFloat(wager))}>Deploy</button>
                    
                </>
                :
                <>
                    <h5>Select Role</h5>
                    <button
                        onClick={() => setD(true)}
                    >Host</button>
                    
                    <button
                        onClick={() => setAsAlice()}
                    >Alice</button>
                    
                    <button
                        onClick={() => setAsAlice(false)}
                    >Bob</button>
                </>
            }
            
        </div>
    );
};