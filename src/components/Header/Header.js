import React from "react";
import './Header.css';
import Social_user from './../../images/Social_user.png';



const Header = ({ headertitle, HeaderExpanded }) => {
    return (
        <div className="Header-container">
            <img src={Social_user}
                className={`Header-image ${HeaderExpanded
                    ? 'Header-image-expanded'
                    : 'Header-image-contracted'
                    }`}
                alt="HeaderImage"
            />
            <h1 className={`Header-text ${HeaderExpanded
                ? 'Header-text-expanded'
                : 'Header-text-contracted'
                }`}>{headertitle}</h1>
        </div>
    )
};

export default Header;