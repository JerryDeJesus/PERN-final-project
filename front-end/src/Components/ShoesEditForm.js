import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ShoesEditForm() {
    let {id} = useParams();
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

    useEffect(() => {
        axios.get(`${API}/shoes/${id}`)
             .then(res => setShoes(res.data))
             .catch(err => console.log(err))
    }, [id]);

    const handleEdit = (e) => {
        e.preventDefault();
        axios.put(`${API}/shoes/${id}`, shoes)
             .then(res => navigate("/shoes"))
             .catch(err => console.log(err))
    };


    let {name, description, price, rating, featured, image} = shoes;

    return(
        <div id="edit-form">
            <form onSubmit={handleEdit}>
            <br/><br/>
            <label htmlFor = "name">Shoe Name</label>
                <input 
                id = "name" 
                value = {name} 
                type = "text" 
                onChange = {handleText} 
                placeholder = "Name of the shoes"
                required />

            
                <label htmlFor = "description">Description</label>
                <input 
                id = "description"
                value = {description} 
                type = "text" 
                onChange = {handleText} 
                placeholder = "What kind of footwear?"
                required
                />
            
            
                <label htmlFor = "price">Price</label>
                <input 
                id = "price" 
                value = {price} 
                type = "number" 
                onChange = {handleText}
                min = "1"
                required 
                />
            

                <label htmlFor = "rating">Rating (1-5)</label>
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

                <label htmlFor = "image">Image Link</label>
                <input 
                id = "image" 
                value = {image} 
                type = "text" 
                onChange = {handleText} 
                placeholder = "http://" 
                />
                <br/>
                <button type="submit">Submit</button>
                <button><Link to = {`/shoes/${id}`}>Back</Link></button>
                <br/><br/><br/><br/>
            </form>
        </div>
    )
}

export default ShoesEditForm;