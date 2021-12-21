import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

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
        }      
    };   
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <h1>{incr}</h1>
                
                <div className="btn_div">
                    
                <Tooltip title="Add">
                    <Button onClick={incnumber} className="btn_green"><AddIcon /></Button></Tooltip>

                <Tooltip title="Delete">
                    <Button onClick={decnumber} className="btn_red">
                        <DeleteIcon/>
                    </Button>
                </Tooltip>

                </div>
            </div> 
        </div>
        </>
    )
}
export default Incdecrement;