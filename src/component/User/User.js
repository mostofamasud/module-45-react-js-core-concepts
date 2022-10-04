import React from 'react';

const User = (props) => {
    console.log(props.user);
    const {name, email, phone, website, username} = props.user;
    return (
        <div className='bg-success text-white py-3 m-4 rounded'>
            <h1>Name:{name}</h1>
            <p>Email: {email}</p>
            <p>Email: {phone}</p>
            <p >Email: {username}</p>
            <p className='text-dark bg-warning p-2 d-inline-block rounded'>Website: {website}</p>
        </div>
    );
};

export default User;