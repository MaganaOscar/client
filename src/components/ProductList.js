import React from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId);
                navigate('/product')
            })
    }
    return (
        <div>
            <h2>All Products: </h2>
            {props.products.map((product, idx)=>{
                return (
                    <p key={idx}>
                        <Link to ={`${product._id}`}><p>{product.title}</p></Link>
                        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                    </p>
                )
            })}
        </div>
    )
}