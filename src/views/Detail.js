import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => {
                setProduct(res.data);
            })
    }, [])

    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p><Link to={`/product/${product._id}/edit`}>Edit</Link></p>
            <p><Link to={`/product/`}>Home</Link></p>
        </div>
    )
}