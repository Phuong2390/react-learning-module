import React from 'react'
import './Sidebar.css'

class Sidebar extends React.Component {

    render() {
        return (
            <aside className="sidebar sidebar-icons-right sidebar-icons-boxed sidebar-expand-lg">
                <header className="sidebar-header">
                    <a className="logo-icon" href="..">
                        <img src="http://thetheme.io/theadmin/assets/img/logo-icon-light.png" alt="logo icon"/>
                    </a>
                    <span className="logo">
                        <a href="..">
                            <img src="http://thetheme.io/theadmin/assets/img/logo-light.png" alt="logo icon"/>
                        </a>
                    </span>
                </header>
                <nav className="sidebar-navigation ps-container ps-theme-default ps-active-y">
                    <ul className="menu">
                        <li className="menu-category">Preview</li>
                        <li className="menu-item">
                            <a className="menu-link" href="...">
                                <span className="title"> Dashboard</span>
                                <span className="fas fa-home"/>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="...">
                                <span className="title"> Samples</span>
                                <span className="arrow"/>
                                <span className="fas fa-tv"/>
                            </a>
                        </li>
                        <li className="menu-category">Framework</li>
                        <li className="menu-item">
                            <a className="menu-link" href="...">
                                <span className="title"> Layout</span>
                                <i className="fas fa-chalkboard"/>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="...">
                                <span className="title"> Content</span>
                                <span className="arrow"/>
                                <i className="fas fa-align-left"/>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="...">
                                <span className="title"> Form</span>
                                <span className="arrow"/>
                                <i className="fas fa-check-square"/>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="...">
                                <span className="title"> Charts</span>
                                <i className="fas fa-chart-pie"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }

}

export default Sidebar