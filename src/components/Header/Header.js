import React from 'react';

import './Header.scss';
import logo from '../../assets/beer.png';

export default function Header(props) {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Bierglas- & Flasche (Logo)" />
            <div className="siteName">Lager- & Rezepteverwaltung</div>
            {props.children}
        </header>
    );
}