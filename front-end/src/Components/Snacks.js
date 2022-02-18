import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack.js";

function Snacks() {
    const [snacks, setSnacks] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/snacks`)
             .then(res => setSnacks(res.data.payload))
             .catch(err => console.log(err))
    }, [API]);

    let displaySnacks = snacks.map((snack, index) => {
        return <Snack key = {index} snack = {snack} />
    });

    return(
        <div>
            <section className="Snacks">
                {displaySnacks}
            </section>
        </div>
    )
}

export default Snacks;