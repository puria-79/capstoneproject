import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><a href="#">Reservations</a></li>
                </ul>
            </nav>
        </>
    )
}