import React from 'react';
import myCss from './fexternalCss.css'
import './FirstHooks.css'
const FirstHooks = () => {
    const bluePara = {
        backgroundColor: "blue",
        color: "white",
        padding: "5px"
    };
  
    const changeValue = (e) => {
        console.log("HEllo", e.target)
    }
    return (
        <div>
            <p className='paraBrown'> your component is ready now</p>
            <p style={bluePara}> your component is ready now</p>
            <p style={{backgroundColor:'black',padding:'5px',margin:'5px 0px',color:'white'}}> your component is ready now</p>
            <button style={myCss.redBtn} onClick={changeValue}>Click Me</button>
        </div>
    );

};

export default FirstHooks;