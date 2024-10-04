import React from 'react';
import Logo from '../../Assets/Img/logo.svg'

export default function Header() {
    return (
        <header className="header">
            <div className="container">

                <a href="#" className="logo">
                    <img src={Logo} width="199" height="50" alt="Covid-19 home"/>
                </a>

                <nav className="navbar" data-navbar>
                    <ul className="navbar-list">

                        <li className="navbar-item">
                            <a href="#home" className="navbar-link" data-nav-link>Home</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#about" className="navbar-link" data-nav-link>About</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link>Prevention</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link>Shop</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link" data-nav-link>Contact</a>
                        </li>

                    </ul>
                </nav>

                <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
                    <ion-icon name="menu-outline" aria-hidden="true" class="menu"></ion-icon>
                    <ion-icon name="close-outline" aria-hidden="true" class="close"></ion-icon>
                </button>

                <a href="#" className="btn btn-primary">Are You Sick</a>

            </div>
        </header>
    );
};

