import React from "react";
import { useState } from "react";
const FormHandling = () => {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        mobile: 0,
        fatherName: '',
        Address: '',
        city: ''
    })
    const styles = {
        lbl: {
            fontWeight: '700',
            fontSize: '18px',
            marginRight: '15px'
        },
        formContainer: {
            marginBottom: '24px'
        },
        inputBox: {
            padding: '5px 15px',
            height: '24px',
            border: '2px solid #000',
            fontSize: '15px',
        }
    }
    const formHandlingData = (event) => {
        setFormData(({
            ...formData,
            [event.target.name]: event.target.value
        }))
        console.log(formData)
    }
    // const submitHandler = (event) => {
    //     event.preventDefualt()
        
    // }
    return <div style={styles.formContainer}>
        <form><h1>form handling component is running</h1>
            <div style={styles.formContainer}>
                <label style={styles.lbl} >First name</label>
                <input style={styles.inputBox} type="text" name="fName" value={formData.fName} onChange={formHandlingData} />
            </div>
            <div style={styles.formContainer}>
                <label style={styles.lbl}>Last name</label>
                <input style={styles.inputBox} type="text" name="lName" value={formData.lName} onChange={formHandlingData} />
            </div>
            <div style={styles.formContainer}>
                <label style={styles.lbl} >Father name</label>
                <input style={styles.inputBox} type="text" name="fatherName" value={formData.fatherName} onChange={formHandlingData} />
            </div>
            <div style={styles.formContainer}>
                <label style={styles.lbl} >Mobile Number</label>
                <input style={styles.inputBox} type="text" name="mobile" value={formData.mobile} onChange={formHandlingData} />
            </div>
            <div style={styles.formContainer}>
                <label style={styles.lbl} >Address</label>
                <input style={styles.inputBox} type="text" name="Address" value={formData.Address} onChange={formHandlingData} />
            </div>
            <div style={styles.formContainer}>
                <label style={styles.lbl} >City</label>
                <input style={styles.inputBox} type="text" name="city" value={formData.city} onChange={formHandlingData} />
            </div>
          
        </form>

    </div>
}
export default FormHandling;