import React from 'react';
import './Header.css'

class HeaderComponent extends React.Component {
    render() {
        return (
            <header className="topbar">
                <div className="topbar-left">
                </div>
                <div className="topbar-right">
                    <ul className="topbar-btns">
                        <li className="dropdown">
                            <a className="topbar-btn" href="#qv-global" data-toggle="quickview">
                                <i className="fas fa-align-right"/>
                            </a>
                        </li>
                    </ul>
                    <ul className="topbar-btns">
                        <li class="dropdown">
                            <span className="topbar-btn" data-toggle="dropdown">
                                <img className="avatar" src="http://thetheme.io/theadmin/assets/img/avatar/1.jpg"
                                     alt="..."/>
                            </span>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
