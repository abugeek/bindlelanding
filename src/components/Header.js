import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <header>
            <img
                src="images/logo-dark.png"
                alt="Luna Icon"
                id="app-icon"
                onClick={handleLogoClick}
            />
            <nav>
                <Link to="/privacy-policy">Privacy Policy</Link>
                {/* <Link to="/terms-conditions">Terms of Conditions</Link> */}
            </nav>
        </header>
    );
}

export default Header;