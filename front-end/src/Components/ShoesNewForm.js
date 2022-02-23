import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ShoesNewForm() {
    const [shoes, setShoes] = useState({
        name: "",
        description: "",
        price: 0,
        rating: 0,
        featured: false,
        image: ""
    });

    const navigate = useNavigate();

    const handleText = (e) => {
        setShoes({...shoes, [e.target.id]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/shoes`, shoes)
             .then(res => navigate("/shoes"))
             .catch(err => console.log(err))
    };

    let {name, description, price, rating, featured, image} = shoes;

    return(
        <div id="new-form">
            <form onSubmit={handleSubmit}>
                
            <label htmlFor = "name">Name</label>
                <input 
                id = "name" 
                value = {name} 
                type = "text" 
                onChange = {handleText} 
                placeholder = "Name of the shoes"
                required />

            
                <label htmlFor = "description">description</label>
                <input 
                id = "description"
                value = {description} 
                type = "text" 
                onChange = {handleText} 
                placeholder = "What kind of footwear?"
                required
                />
            
            
                <label htmlFor = "price">price</label>
                <input 
                id = "price" 
                value = {price} 
                type = "number" 
                onChange = {handleText}
                min = "1"
                required 
                />
            

                <label htmlFor = "rating">Rating</label>
                <input 
                id = "rating" 
                value = {rating} 
                type = "number" 
                onChange = {handleText} 
                placeholder = "Rate 1 to 5!"
                min = "1"
                max = "5"
                required
                />
            
                <label htmlFor = "featured">Favorited?</label>
                <input 
                id = "featured" 
                value = {featured} 
                type = "checkbox" 
                onChange = {handleText} 
                placeholder = "http://" 
                />

                <label htmlFor = "image">Image</label>
                <input 
                id = "image" 
                value = {image} 
                type = "text" 
                onChange = {handleText} 
                placeholder = "http://" 
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ShoesNewForm;