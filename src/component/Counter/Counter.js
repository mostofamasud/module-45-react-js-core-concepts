import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(25);
     const increase = () =>{
        setCount(count+1);
     }
     const decrease = () =>{
        setCount(count-1);
     }
    return (
        <div>
            <h1>Counter:{count} </h1>
            <p><button onClick={increase}>Increase</button></p>
            <p><button onClick={decrease}>Decrease</button></p>
        </div>
    );
};

export default Counter;