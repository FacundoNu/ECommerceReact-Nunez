import React from 'react';
import { MenuItems } from "../../constants/MenuItems";
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <nav className="NavbarItems">
            <h1 className = "navbar-logo">React Shop<i className="fab fa-react"></i></h1>
            <div className="menu-icon">

            </div>
            <ul className="nav-items">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
                <CartWidget />
            </ul>
        </nav>
    )
}

export default NavBar