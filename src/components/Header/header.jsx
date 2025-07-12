import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../images/logo.svg";
import '../../blocks/header.css';

function Header({ loggedIn, userEmail, onLogout }) {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        onLogout();
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
             {loggedIn && isMenuOpen && (
                <div className="header__mobile-menu">
                    <p className="header__mobile-email">{userEmail}</p>
                    <button 
                        className="header__mobile-logout" 
                        onClick={handleLogout}
                    >
                        Cerrar sesión
                    </button>
                </div>
            )}
            <div className="header__main">
                <img
                    src={logo}
                    alt="Logo de la pagina"
                    className="header__logo"
                />
                
                <nav className="header__nav header__nav_desktop">
                    {loggedIn ? (
                        <div className="header__user-info">
                            <p className="header__email">{userEmail}</p>
                            <button 
                                className="header__logout-button" 
                                onClick={onLogout}
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    ) : (
                        <div className="header__auth-links">
                            {location.pathname === '/signin' && (
                                <Link to="/signup" className="header__link">
                                    Regístrate
                                </Link>
                            )}
                            {location.pathname === '/signup' && (
                                <Link to="/signin" className="header__link">
                                    Iniciar sesión
                                </Link>
                            )}
                        </div>
                    )}
                </nav>

                {loggedIn && (
                    <button 
                        className="header__hamburger"
                        onClick={toggleMenu}
                        type="button"
                    >
                        {isMenuOpen ? (
                            <span className="header__close">×</span>
                        ) : (
                            <>
                                <span className="header__hamburger-line"></span>
                                <span className="header__hamburger-line"></span>
                                <span className="header__hamburger-line"></span>
                            </>
                        )}
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;