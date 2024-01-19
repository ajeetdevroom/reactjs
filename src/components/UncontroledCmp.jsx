import React, { useRef } from 'react';

const UncontroledCmp = () => {
    const ref1 = useRef(null);
    const submitForm = (event) =>{
        event.preventDefault();
        console.log(ref1.current.value)
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" ref={ref1} placeholder='enter text'/>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default UncontroledCmp;