import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h1>Hello Users</h1>
            <div className='text-center'>
            {
                users.map(user =><User user = {user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;