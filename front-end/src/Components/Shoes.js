import { Link } from "react-router-dom";

function Shoes({shoes}) {
    let {name, description, price, rating, featured, image, id} = shoes;
    return(
        <article className="Shoes" >
            <Link to = {`/shoes/${id}`}>
                <div className="shoes-card">
                    <h4>Item: {name}</h4>
                    <h4>Info: {description}</h4>
                    <h4>${price}</h4>
                    <h4>Rating: {rating}/5</h4>
                    <h4>Featured: {featured ? "Yes" : "No"}</h4>
                    <img src={image} alt={name} />
                </div>
            </Link>
        </article>

    )
}

export default Shoes;