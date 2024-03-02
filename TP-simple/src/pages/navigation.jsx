import { NavLink } from "react-router-dom"
function Navigation() {
    return (
        <nav className="container">
            <ul >
                <li > <NavLink to="/"  className={({isActive}) =>(isActive ? "activeLink" : undefined)}>Liste des Fruits</NavLink></li>
                <li><NavLink to="/add"  className={({isActive}) =>(isActive ? "activeLink" : undefined)}>Add to Fruits</NavLink></li>
                <li><NavLink to="/fine"  className={({isActive}) =>(isActive ? "activeLink" : undefined)}>Fine Fruits</NavLink></li>
                <li><NavLink to="/delete"  className={({isActive}) =>(isActive ? "activeLink" : undefined)}>To Delete Fruits</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;
