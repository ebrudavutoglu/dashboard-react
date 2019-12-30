import React from "react";
import classNames from "classnames";
import {Link} from "react-router-dom"
import {DropdownToggle, DropdownMenu, DropdownItem, Navbar, ButtonDropdown, Badge} from "reactstrap";

class AdminNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            natificationOpen:false,
            langOpen:false,
            profileOpen:false,
            color:'navbar-transparent'
        }
        this.langToggle = this.langToggle.bind(this);
        this.natToggle = this.natToggle.bind(this);
        this.profileToggle = this.profileToggle.bind(this);
    }
    langToggle(){
        this.setState({
            langOpen: !this.state.langOpen
        })
    }
    natToggle(){
        this.setState({
            natificationOpen: !this.state.natificationOpen
        })
    }
    profileToggle(){
        this.setState({
            profileOpen: !this.state.profileOpen
        })
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
                            <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
                                <ButtonDropdown isOpen={this.state.langOpen} toggle={this.langToggle}>
                                    <DropdownToggle>
                                        <div className="flag">
                                            <img src="/assets/img/flags/en.jpg" alt=""/>
                                            English
                                        </div>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        
                                        <DropdownItem>
                                            <img src="/assets/img/flags/en.jpg" alt=""/>
                                            <span>English</span>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <img src="/assets/img/flags/en.jpg" alt=""/>
                                            <span>Turkish</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </li>
                            <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
                                <ButtonDropdown isOpen={this.state.natificationOpen} toggle={this.natToggle}>
                                    <DropdownToggle>
                                        <i className="icon-notifications_none"></i>
                                        <Badge color="danger">1</Badge>
                                    </DropdownToggle>
                                    <DropdownMenu className="notification-menu">
                                        <DropdownItem header>Natification (7)</DropdownItem>
                                        <DropdownItem divider/>
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
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </li>
                            <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
                                <ButtonDropdown isOpen={this.state.profileOpen} toggle={this.profileToggle}>
                                    <DropdownToggle>
                                        <div className="dropdown-profile">
                                            <img src="http://placehold.it/200X200" alt=""/>
                                        </div>
                                    </DropdownToggle>
                                    <DropdownMenu className="profile-menu">
                                        <Link to="/" className="dropdown-item notify-item"><i className="icon-user2"></i>Profile</Link>
                                        <Link to="/" className="dropdown-item notify-item"><i className="icon-account_balance_wallet"></i>My Wallet</Link>
                                        <Link to="/" className="dropdown-item notify-item"><i className="icon-settings"></i>Settings</Link>
                                        <Link to="/" className="dropdown-item notify-item"><i className="icon-unlock"></i>Lockscreen</Link>
                                        <DropdownItem divider/>
                                        <Link to="/" className="dropdown-item notify-item text-danger"><i className="icon-power-off"></i>Log Out</Link>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </Navbar>
        )
    }
}

export default AdminNavbar;