import React from 'react';
import { useParams } from 'react-router-dom';
const UserDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>User details page... {id}</h1>
        </div>
    );
};

export default UserDetails;