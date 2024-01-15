import React from 'react';
import { useNavigate } from 'react-router-dom';

const Course = () => {
    const navigate = useNavigate()
    return (
        <div>
            Place order...
            <div>
                <button onClick={() => { navigate('order-summary') }}>Place order</button>
            </div>
        </div>
    );
};

export default Course;