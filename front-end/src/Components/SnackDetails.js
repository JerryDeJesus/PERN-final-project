import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HeartHealth from "./HeartHealth.js";

const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
    const [snack, setSnack] = useState([]);
    let {id} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`)
             .then(res => setSnack(res.data.payload))
             .catch(err => console.log(err))
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${API}/snacks/${id}`)
             .then(res => navigate("/snacks"))
             .catch(err => console.log(err))
    };

    let {name, fiber, protein, added_sugar, is_healthy, image} = snack;

    return(
        <div className="Snacks">
        <article>
            <aside>
                <h4>the snack health</h4>
                {HeartHealth(is_healthy)}
            </aside>
            <div className="Snack">
                <h5>{name}</h5>
                <img src = {image} alt = {name} />
                <br />
                <h6>Protein: {protein}</h6>
                <h6>Fiber: {fiber}</h6>
                <h6>Added Sugar: {added_sugar}</h6>
            </div>
            <div className="showNavigation">
                <div><Link to = {"/snacks"}><button>Back</button></Link></div>
                <div><Link to = {`/snacks/${id}/edit`}><button>Edit</button></Link></div>
                <div><button onClick={handleDelete}>Delete</button></div>
            </div>
        </article>
        </div>
    )

}

export default SnackDetails;