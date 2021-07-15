import React, { useState } from 'react';
import axios from 'axios';
export default() => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const onSubmitHandler = event => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/product", {
            title,
            price,
            description
        })
            .then(res => {
                setTitle("");
                setPrice();
                setDescription("");
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/> 
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e) => setPrice(+(e.target.value))} step="0.01" min="0.00" value={price} placeholder="0.00"/>  
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}