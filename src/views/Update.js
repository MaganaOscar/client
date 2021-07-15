import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';
export default props => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0.00);
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => navigate(`/product/${res.data._id}`));
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" 
                    onChange={(e) => setPrice(+(e.target.value))} 
                    step="0.01" 
                    min="0.00" 
                    value={price} 
                    placeholder="0.00"/>  
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}