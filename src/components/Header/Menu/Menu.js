import React from 'react';

import './Menu.scss';

export default class Menu extends React.Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/recipes">Rezepte</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/stock">Lagerstand</a>
                </li>
            </ul>
        );
    }
}