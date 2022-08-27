// import main commponent
import React, {component} from "react";
import { NavLink } from "react-router-dom";

// import

const Header = () => {
    return ( 
        <header>
            <div className="container">
                <div className="brand">
                    menuApp
                </div>
                <ul>
                    <li>
                        <NavLink to="/menu">menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">shoping</NavLink>
                    </li>
                </ul>
            </div>
            
        </header>
    )
}

export default Header;