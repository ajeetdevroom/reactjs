import React from 'react';
import { Link,Outlet } from 'react-router-dom';
const Order = () => {
    return (
        <div>
            <h1>Order</h1>
            <div>
                <nav>
                <Link  to='/order/order1'>Order1</Link> 
                <Link  to='/order/order2'>Order2</Link> 
                </nav>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default Order;