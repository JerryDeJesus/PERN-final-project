import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ShoesDetails() {
    const [shoes, setShoes] = useState([]);
    let {id} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/shoes/${id}`)
             .then(res => setShoes(res.data))
             .catch(err => console.log(err))
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${API}/shoes/${id}`)
             .then(res => navigate("/shoes"))
             .catch(err => console.log(err))
    };

    let {name, description, price, rating, featured, image} = shoes;

    return(
        <div className="Shoes">
        <article>
            <div className="Shoes">
                <h5>{name}</h5>
                <img src = {image} alt = {name} />
                <br />
                <h6>price: {price}</h6>
                <h6>description: {description}</h6>
                <h6>featured: {featured}</h6>
                <h6>rating: {rating}</h6>
            </div>
            <div className="showNavigation">
                <div><Link to = {"/shoes"}><button>Back</button></Link></div>
                <div><Link to = {`/shoes/${id}/edit`}><button>Edit</button></Link></div>
                <div><button onClick={handleDelete}>Delete</button></div>
            </div>
        </article>
        </div>
    )

}

export default ShoesDetails;