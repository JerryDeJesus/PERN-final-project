import axios from "axios";
import { useState, useEffect } from "react";
import Shoes from "./Shoes.js";

function AllShoes() {
    const [shoes, setShoes] = useState([]);
    const [query, setQuery] = useState("");
    const [typeQuery, setTypeQuery] = useState("");
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/shoes`)
             .then((res) => setShoes(res.data))
             .catch(err => console.log(err))
    }, [API]);

    const sortByType = (e) => {
        setTypeQuery(e.target.value)
    };

    let displayShoes = shoes.map((shoe, index) => {
        return <Shoes key = {index} shoes = {shoe} />
    });

    let filteredShoes = displayShoes.filter((shoeObj)=>{
        if(typeQuery !== ""){
        return shoeObj.props.shoes.footwear_type.toLowerCase().includes(typeQuery.toLowerCase());
        }else{
        return shoeObj.props.shoes.name.toLowerCase().includes(query.toLowerCase());
        }
    })

    return(
        <div>
            <label htmlFor="search-box">Search by item name:</label>
            <input
                type="search"
                id="search-box"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value) && setTypeQuery(query)}
            />

            <label htmlFor="search-by-type">Search by footwear type:</label>
            <select 
                name="search-by-type" 
                id="search-by-type"
                onChange={sortByType} >
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

            <section className="Shoes">
                {filteredShoes}
            </section>
        </div>
    )
}

export default AllShoes;