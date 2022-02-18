import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth.js";

function Snack({snack}) {
    //let {name, fiber, protein, added_sugar, is_healthy, image, id} = snack;
    let {name, is_healthy, image, id} = snack;
    return(
        <article className="Snack">
            <Link to = {`/snacks/${id}`}>
                <div className="snack-card">
                    {/* <h4><img src = {image} alt = {name} /></h4>
                    <h4>{name}</h4>
                    {HeartHealth(is_healthy)}
                    <h4>Fiber: {fiber}</h4>
                    <h4>Protein: {protein}</h4>
                    <h4>Added Sugar: {added_sugar}</h4>
                    <button><Link to = {`/snacks/${id}`}>Details</Link></button> */}

                    <h4><img src = {image} alt = {is_healthy ? 'healthy food' : 'unhealthy food'} /></h4>
                    <h4>{name}</h4>
                    <h4>{is_healthy}</h4>
                    <span className="all-display-heart">{HeartHealth(is_healthy)}</span>
                </div>
            </Link>
        </article>

    )
}

export default Snack;