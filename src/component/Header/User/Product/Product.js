import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {id, name, price, color} = props.product;
    return (
        <div className='product'>
            
                <div>
                <h4>Product Name: {name}</h4>
                <p><small>ID:</small>{id}</p>
                <p className='d-flex justify-content-center align-items-center g-2'>Price: <h3>{price}</h3></p>
                <h5>Color: {color}</h5>
                </div>
        </div>
    );
};

export default Product;