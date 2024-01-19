import React, { useState } from 'react';

const ControlCmp = () => {
    const [name, setName]=useState()    
    const submitForm = (event) =>{
        event.preventDefault();
        console.log(name)
    }
    return (
        <div>
             <form onSubmit={submitForm}>
                <input type="text" name='name' onChange={(e)=>{setName(e.target.value)}} placeholder='enter text'/>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default ControlCmp;