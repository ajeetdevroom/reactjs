import React from 'react';

const calculation = () => {
    return (
        <>
            <div id='app-dashboard-container'>
                You react app is running now...
            </div>
            <div>Increment/Decrement</div>
            <div className='quantity'>
                <span className='quantity-minus' title='decrement'>-</span>
                <input name='quantity' type='text' value={0} />
                <span className='quantity-plus' title='increment'>+</span>
            </div>
        </>
    );
};

export default calculation;