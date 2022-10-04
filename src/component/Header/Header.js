import React from 'react';
import './Header.css'

const Header = () => {
    const header = ['Home', 'About', 'Product', 'Contact']
    return (
        <div className='header'>
            {header.map(head => ShowHeader(head))}
        </div>
    );
};
const ShowHeader = (head) =>{
   return<li>{head}</li>
}

export default Header;