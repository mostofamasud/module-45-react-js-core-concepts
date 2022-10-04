import React from 'react';
import Product from './Product/Product';
import './User.css'

const User = () => {
    const products = [
        {id: 1, name: 'Laptop', price: 60000, color: 'Violet Blue'},
        {id: 2, name: 'Mobile', price: 35666, color: 'Pink'},
        {id: 3, name: 'Smart Watch', price: 6000, color: 'Violet'},
        {id: 4, name: 'Shirt', price: 600, color: 'White'},
        {id: 5, name: 'Pants', price: 5600, color: 'Jinse'},
        {id: 6, name: 'Polo T-Shirt', price: 560, color: 'Ash'},
        {id: 7, name: 'Laptop', price: 60000, color: 'Violet Blue'},
        {id: 8, name: 'Mobile', price: 35666, color: 'Pink'},
        {id: 9, name: 'Smart Watch', price: 6000, color: 'Violet'},
        {id: 10, name: 'Shirt', price: 600, color: 'White'},
        {id: 11, name: 'Pants', price: 5600, color: 'Jinse'},
        {id: 12, name: 'Polo T-Shirt', price: 560, color: 'Ash'},
        {id: 13, name: 'Laptop', price: 60000, color: 'Violet Blue'},
        {id: 13, name: 'Mobile', price: 35666, color: 'Pink'},
        {id: 15, name: 'Smart Watch', price: 6000, color: 'Violet'},
        {id: 16, name: 'Shirt', price: 600, color: 'White'},
        {id: 17, name: 'Pants', price: 5600, color: 'Jinse'},
        {id: 18, name: 'Polo T-Shirt', price: 560, color: 'Ash'},
        {id: 19, name: 'Laptop', price: 60000, color: 'Violet Blue'},
        {id: 20, name: 'Mobile', price: 35666, color: 'Pink'},
        {id: 21, name: 'Smart Watch', price: 6000, color: 'Violet'},
        {id: 22, name: 'Shirt', price: 600, color: 'White'},
        {id: 23, name: 'Pants', price: 5600, color: 'Jinse'},
        {id: 24, name: 'Polo T-Shirt', price: 560, color: 'Ash'}
    ]
    return (
        <div className='user'>
            {
                products.map(product => <Product 
                    key={product.id} product = {product}
                ></Product>)
            }
        </div>
    );
};

export default User;