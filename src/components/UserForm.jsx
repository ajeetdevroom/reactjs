import React, { useState } from 'react';

const UserForm = () => {    
    const [formData,setFormData] = useState({})
    const cssStyle = {
        lbl: { display: 'block' },
        formInput: {
            margin: '10px 15px'
        }
    }
    const handelFormData = (event)=>{
        setFormData((values)=>({...values,[event.target.name] : event.target.value}));
    }
    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={submitFormHandler}>
                <div style={cssStyle.formInput}>
                    <label style={cssStyle.lbl}>Enter your name</label>
                    <input type='text' name='name' onChange={handelFormData} value={formData.name}/>
                </div>
                <div style={cssStyle.formInput}>
                    <label style={cssStyle.lbl}>Enter your father name</label>
                    <input type='text' name='fathername' onChange={handelFormData} value={formData.fathername}/>
                </div>
                <div style={cssStyle.formInput}>
                    <label style={cssStyle.lbl}>Enter your address</label>
                    <input type='text' name='address' onChange={handelFormData} value={formData.address}/>
                </div>
                <div style={cssStyle.formInput}>
                    <button type='submit'>Submit form</button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;