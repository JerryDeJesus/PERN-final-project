import axios from "axios";
import { useState, useEffect } from "react";
import Shoes from "./Shoes.js";

function AllShoes() {
    const [shoes, setShoes] = useState([]);
    const [query, setQuery] = useState("");
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/shoes`)
             .then((res) => setShoes(res.data))
             .catch(err => console.log(err))
    }, [API]);

    let displayShoes = shoes.map((shoe, index) => {
        return <Shoes key = {index} shoes = {shoe} />
    });

    let filteredShoes = displayShoes.filter((shoeObj)=>{
        return shoeObj.props.shoes.name.toLowerCase().includes(query.toLowerCase());
    })

    return(
        <div>
            <label htmlFor="search-box">Search by item name:</label>
            <input
                type="search"
                id="search-box"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <section className="Shoes">
                {filteredShoes}
            </section>
        </div>
    )
}

export default AllShoes;