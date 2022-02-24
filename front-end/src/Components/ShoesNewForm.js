import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ShoesNewForm() {
    const [shoes, setShoes] = useState({
        name: "",
        description: "",
        footwear_type: "",
        price: 0,
        rating: 0,
        featured: false,
        image: ""
    });

    const navigate = useNavigate();

    const handleText = (e) => {
        setShoes({...shoes, [e.target.id]: e.target.value})
    };


    // sadly added after deadline at 4pm...
    const handleDropdown = (e) => {
        setShoes({...shoes, footwear_type: e.target.value})
        console.log(footwear_type)
    };
    // ends here 

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/shoes`, shoes)
             .then(res => navigate("/shoes"))
             .catch(err => console.log(err))
    };

    let {name, description, footwear_type, price, rating, featured, image} = shoes;

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
                required 
            />

            
            <label htmlFor = "description">Description</label>
            <input 
                id = "description"
                value = {description} 
                type = "text" 
                onChange = {handleText} 
                placeholder = "What kind of footwear?"
                required
            />
            
            <label htmlFor = "footwearType" >Footwear Type:</label>
            <select 
                name="footwearType" 
                id="footwearType" 
                onChange={handleDropdown} 
                required 
            >
                    <option value="">--Choose an option--</option>
                    <option value="Sneakers">Sneakers</option>
                    <option value="Work Boots">Work Boots</option>
                    <option value="Rain Boots">Rain Boots</option>
                    <option value="Dress Shoes">Dress Shoes</option>
                    <option value="Sandals">Sandals</option>
                    <option value="Slippers">Slippers</option>
                    <option value="Clogs">Clogs</option>
                    <option value="Other">Other</option>
            </select>
            
            <label htmlFor = "price">Price</label>
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