import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const navLinkStyles =({isActive})=>{
        return{
            fontWeight: isActive?'bold':'normal',
            textDecoration: isActive?'none':'underline'
        }
    }
    return (
        <div>
            <nav>
                <NavLink style={navLinkStyles} to='/'>Home</NavLink> 
                <NavLink style={navLinkStyles} to='/about'>about</NavLink> 
                <NavLink style={navLinkStyles}  to='/course'>course</NavLink>
                <NavLink style={navLinkStyles}  to='/order'>Order</NavLink>
                <NavLink style={navLinkStyles}  to='/users'>Users</NavLink>
                <NavLink style={navLinkStyles}  to='/order-replace-history'>ConfirmOrderWithReplaceHistory</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;