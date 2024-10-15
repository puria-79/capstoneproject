import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav>
                <ul className="flex px-10">
                    <li className="px-3 font-bold"><Link to="/">Home</Link></li>
                    <li className="px-3 font-bold"><Link to="/about">About us</Link></li>
                    <li className="px-3 font-bold"><Link to="/menu">Menu</Link></li>
                    <li className="px-3 font-bold"><a href="/reservation">Reservations</a></li>
                </ul>
            </nav>
        </>
    )
}