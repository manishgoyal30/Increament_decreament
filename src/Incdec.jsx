import React, { useState } from "react";

const Incdecrement = () =>{
    const [incr, setinc] = useState(0);

    const incnumber= () =>{
       setinc(incr+1);
    };

    const decnumber= () =>{
        if(incr>0){
            setinc(incr-1);
        } else{
            alert("Sorry, Zero Limit Reach")
            setinc(0);
        }      
    };   

    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <h1>{incr}</h1>
                <div className="btn_div">
                    <button onClick={incnumber}>Increament</button>
                    <button onClick={decnumber}>Decreament</button>
                </div>
            </div> 
        </div>
        </>
    )
}
export default Incdecrement;