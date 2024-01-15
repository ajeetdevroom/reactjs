import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

const Users = () => {
    const userId =1;
    const [serchPasram, setSearchParam]=useSearchParams();
    const showActiveUsers = serchPasram.get('filter') === 'active'

    return (
        <div>
            <ol>
                <Link to={`user/${userId}`}><li>User 1</li></Link>
                <li>User 2</li>
                <li>User 3</li>
                <li>User 4</li>
                <li>User 5</li>
                <button onClick={()=>setSearchParam({filter:'active'})}>Active user</button>
                <button onClick={()=>setSearchParam({})}>All user</button>
            </ol>
            <Outlet/>
            <div>
                {showActiveUsers?(<h1>Active user</h1>):(<h1>All user</h1>)}
            </div>
        </div>
    );
};

export default Users;