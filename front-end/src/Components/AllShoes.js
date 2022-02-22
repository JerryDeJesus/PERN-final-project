import axios from "axios";
import { useState, useEffect } from "react";
import Shoes from "./Shoes.js";

function AllShoes() {
    const [shoes, setShoes] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/shoes`)
             .then((res) => setShoes(res.data))
             .catch(err => console.log(err))
    }, [API]);

    let displayShoes = shoes.map((shoe, index) => {
        return <Shoes key = {index} shoes = {shoe} />
    });

    return(
        <div>
            <section className="Shoes">
                {displayShoes}
            </section>
        </div>
    )
}

export default AllShoes;