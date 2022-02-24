import { Link } from "react-router-dom";

function Shoes({shoes}) {
    let {name, description, footwear_type, price, rating, featured, image, id} = shoes;

    return(
        <article className="Shoes" >
            <Link to = {`/shoes/${id}`}>
                <div className="shoes-card">
                    <h3> {name}</h3>
                    <h4>Desc: {description}</h4>
                    <h4>Type: {footwear_type}</h4>
                    <h4>Price: ${price}</h4>
                    <h4>Rating: {rating}/5</h4>
                    <h4>Featured: {featured ? "Yes" : "No"}</h4>
                    <br/>
                    <img src={image} alt={name} />
                </div>
            </Link>
        </article>

    )
}

export default Shoes;