import React from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {Card, CardHeader, Collapse, CardBody, Button} from 'reactstrap';

class Sidebar extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            isOpen : false,
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }
    toggleSidebar(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        const {routes} = this.props;
        return(
            <div className="sidebar">
                <div className="sidebar-menu">
                    {
                        routes.map((prop, key) => {
                            if(!prop.path){
                                return (
                                    <Card key={key}>
                                        <Button onClick={this.toggleSidebar} data-event={prop.name} className="sidebar-menu-item"><i className={prop.icon}></i> {prop.name}</Button>
                                        <Collapse isOpen={this.state.isOpen}>
                                            <CardBody>
                                                {
                                                    prop.submenu.map((menu, key) =>
                                                        <Link to={menu.layout + menu.path} key={key}>{menu.name}</Link>
                                                    )
                                                }
                                            </CardBody>
                                        </Collapse>
                                    </Card>
                                )
                            }else{
                                return(
                                    <Card key={key}>
                                        <CardHeader onClick={this.toggle} data-event={prop.name} className="sidebar-menu-item"><Link key={prop.name} to={prop.layout + prop.path}><i className={prop.icon}></i> {prop.name}</Link></CardHeader>
                                    </Card>
                                   /*  <Link key={prop.name} to={prop.layout + prop.path} className="sidebar-menu-item">
                                        <i className={prop.icon}></i>
                                        <span>{prop.name}</span>
                                        <Badge color="info">{prop.badge}</Badge>
                                    </Link> */
                                )
                            }
                            /* if(prop.redirect) return null;
                            return(
                                    
                            ) */
                        })
                    }
                </div>
            </div>
        )
    }
}
Sidebar.defaultProps = {
    routes: [{}]
  };
  
Sidebar.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
  };

export default Sidebar;