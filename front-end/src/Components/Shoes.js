import { Link } from "react-router-dom";

function Shoes({shoes}) {
    let {name, description, price, rating, featured, image, id} = shoes;
    return(
        <article className="Shoes">
            <Link to = {`/shoes/${id}`}>
                <div className="shoes-card">
                    <h4>{name}</h4>
                    <h4>{description}</h4>
                    <h4>{price}</h4>
                    <h4>{rating}</h4>
                    <h4>{featured}</h4>
                    <h4>{image}</h4>
                </div>
            </Link>
        </article>

    )
}

export default Shoes;