import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ShoesEditForm() {
    let {id} = useParams();
    const [shoes, setShoes] = useState({
        name: "",
        description: 0,
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

            <label htmlFor = "name">Name</label>
                <input id = "name" value = {name} type = "text" onChange = {handleText} />

            
                <label htmlFor = "description">description</label>
                <input id = "description" value = {description} type = "number" onChange = {handleText} />
            
            
                <label htmlFor = "price">price</label>
                <input id = "price" value = {price} type = "number" onChange = {handleText} />
            

                <label htmlFor = "rating">Rating</label>
                <input id = "rating" value = {rating} type = "number" onChange = {handleText} />
            
                <label htmlFor = "featured">featured</label>
                <input id = "featured" value = {featured} type = "boolean" onChange = {handleText} placeholder = "http://" />

                <label htmlFor = "image">Image</label>
                <input id = "image" value = {image} type = "text" onChange = {handleText} placeholder = "http://" />

                <button type="submit">Submit</button>
                <button><Link to = {`/shoes/${id}`}>Back</Link></button>
            </form>
        </div>
    )
}

export default ShoesEditForm;