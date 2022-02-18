import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <Link to = "/shoes"><h1>SHOES</h1></Link>
            <button><Link to = "/shoes/new">New Entry</Link></button>
        </nav>
    )
}

export default Navbar;