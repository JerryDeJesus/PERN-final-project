import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
// import ToggleHeart from "./ToggleHeart";
import HeartHealth from "./HeartHealth";

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
    let {id} = useParams();
    const [snack, setSnack] = useState({
        name: "",
        fiber: 0,
        protein: 0,
        added_sugar: 0,
        is_healthy: false,
        image: ""
    });

    const navigate = useNavigate();

    const handleText = (e) => {
        setSnack({...snack, [e.target.id]: e.target.value})
    };

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`)
             .then(res => setSnack(res.data.payload))
             .catch(err => console.log(err))
    }, [id]);

    const handleEdit = (e) => {
        e.preventDefault();
        axios.put(`${API}/snacks/${id}`, snack)
             .then(res => navigate("/snacks"))
             .catch(err => console.log(err))
    };


    let {name, fiber, protein, added_sugar, image, is_healthy} = snack;

    return(
        <div id="edit-form">
            <form onSubmit={handleEdit}>
                <div className="editform-heart">
                    <HeartHealth snackHealth = {is_healthy} />
                </div>

                <label htmlFor = "name">Name</label>
                <input id = "name" value = {name} type = "text" onChange = {handleText} required />
            
                <label htmlFor = "fiber">Fiber</label>
                <input id = "fiber" value = {fiber} type = "number" onChange = {handleText} />
            
                <label htmlFor = "protein">Protein</label>
                <input id = "protein" value = {protein} type = "number" onChange = {handleText} />

                <label htmlFor = "added_sugar">Added Sugar</label>
                <input id = "added_sugar" value = {added_sugar} type = "number" onChange = {handleText} />
            
                <label htmlFor = "image">Image</label>
                <input id = "image" value = {image} type = "text" onChange = {handleText} />

                <button type="submit">Submit</button>
                <button><Link to = {`/snacks/${id}`}>Back</Link></button>
            </form>
        </div>
    )
}

export default SnackEditForm;