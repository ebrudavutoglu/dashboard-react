import React from "react";
import classNames from "classnames";
import {Link} from "react-router-dom"
import {Dropdown,  Navbar, Badge} from "react-bootstrap";

class AdminNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    render(){
        return(
            <Navbar className={classNames("navbar-absolute", this.state.color)}>
                <div className="topbar">
                    <div className="topbar-left">
                        <Link to="/" className="logo">
                            <span>
                                <img src="/assets/img/logo-light.png" alt=""/>
                            </span>
                        </Link>
                    </div>
                    <div className="navbar-custom">
                        <ul className="navbar-right float-right mb-0">
                            <li className="dropdown notification-list d-none d-md-block">
                                <form role="search" className="app-search">
                                    <div className="form-group mb-0">
                                        <input type="text" className="form-control" placeholder="Search..."/>
                                        <button type="submit">
                                            <i className="icon-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </li>
                            <li className="notification-list list-inline-item d-none d-md-inline-block language-dropdown">
                                <Dropdown >
                                    <Dropdown.Toggle>
                                        Language
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        
                                        <Dropdown.Item>
                                            <img src="/assets/img/flags/en.jpg" alt=""/>
                                            <span>English</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <img src="/assets/img/flags/en.jpg" alt=""/>
                                            <span>Turkish</span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="notification-list list-inline-item d-none d-md-inline-block">
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        <i className="icon-notifications_none"></i>
                                        <Badge variant="danger">1</Badge>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="notification-menu">
                                        <Dropdown.Item header>Natification (7)</Dropdown.Item>
                                        <Dropdown.Item divider/>
                                        <Link to="/" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-success">
                                                <i className="icon-message"></i>
                                            </div>
                                            <p className="notify-details">
                                                Your order is placed
                                                <span className="text-muted">Dummy text of the printing and typesetting industry.</span>
                                            </p>
                                        </Link>
                                        <Link to="/" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-primary">
                                                <i className="icon-message"></i>
                                            </div>
                                            <p className="notify-details">
                                                Your order is placed
                                                <span className="text-muted">Dummy text of the printing and typesetting industry.</span>
                                            </p>
                                        </Link>
                                        <Link to="/" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-info">
                                                <i className="icon-message"></i>
                                            </div>
                                            <p className="notify-details">
                                                Your order is placed
                                                <span className="text-muted">Dummy text of the printing and typesetting industry.</span>
                                            </p>
                                        </Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="notification-list list-inline-item d-none d-md-inline-block profile-dropdown">
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        <div className="dropdown-profile">
                                            <img src="http://placehold.it/200X200" alt=""/>
                                        </div>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="profile-menu">
                                        <Link to="/" className="dropdown-item notify-item"><i className="icon-user2"></i>Profile</Link>
                                        <Link to="/" className="dropdown-item notify-item"><i className="icon-account_balance_wallet"></i>My Wallet</Link>
                                        <Link to="/" className="dropdown-item notify-item"><i className="icon-settings"></i>Settings</Link>
                                        <Link to="/" className="dropdown-item notify-item"><i className="icon-unlock"></i>Lockscreen</Link>
                                        <Dropdown.Item divider/>
                                        <Link to="/" className="dropdown-item notify-item text-danger"><i className="icon-power-off"></i>Log Out</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </Navbar>
        )
    }
}

export default AdminNavbar;