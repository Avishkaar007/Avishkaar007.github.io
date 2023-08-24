import React, { useState } from "react";
import "../styles/simulation.css"
export default function Simulation() {

    return (
        <div id="simulation-box">
            <Main />
        </div>
    );

}

function Bit({count}) {
    const [binVal, setBinVal] = useState(0);
    const arr = Array.from({ length: count }, (_, index) => { return (<div key={index} className="bit">{binVal}</div>) });
    console.log(arr,{count});
    return (
        <div>{ arr }</div>
    )
}
function Main(){
    const [count, setCount] = useState(0);
    function handleChange(e) {
        console.log(e.target.value,"ed")
        
        setCount( e.target.value );
    }

    function handleSubmit(e) {

        e.preventDefault();
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <label>
                    Bit Count : <> </>
                    <input type="number" className="inputText" value={count} onChange={handleChange} />
                </label> <input type="submit" className=" inputText" value="Go" />
            </form>
            <div><Bit count={count}/></div>
        </>
    );
}