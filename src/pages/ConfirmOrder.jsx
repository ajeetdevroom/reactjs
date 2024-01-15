import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmOrder = () => {
    const navigate = useNavigate()
    return (
        <div>
            Confirmed Order!...
            <div>
                <button onClick={()=>{navigate(-1)}}>Go Back</button>
            </div>
        </div>
    );
};

export default ConfirmOrder;