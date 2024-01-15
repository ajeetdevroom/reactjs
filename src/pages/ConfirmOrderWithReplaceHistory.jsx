import React from 'react';
import { useNavigate } from 'react-router-dom';
const ConfirmOrderWithReplaceHistory = () => {
    const navigate = useNavigate()
    return (
        <div>
            Place order with ConfirmOrderWithReplaceHistory...
            <div>
                <button onClick={() => { navigate('order-summary', { replace: true }) }}>Place order</button>
            </div>
        </div>
    );
};

export default ConfirmOrderWithReplaceHistory;