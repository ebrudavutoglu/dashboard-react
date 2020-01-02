import React from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {Accordion, Card, Button} from 'react-bootstrap';


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
                    <Accordion defaultActiveKey="0">
                    {
                        routes.map((prop, key) => {
                            if(!prop.path){
                                return (
                                    <Card key={key} {...{className:`accordion-item, ${this.state.isOpen && 'accordion-item--opened'}`, onClick:this.toggleSidebar}}>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={prop.name}  className="sidebar-menu-item"><i className={prop.icon}></i> {prop.name}</Accordion.Toggle>
                                        <Accordion.Collapse eventKey={prop.name}>
                                            <Card.Body>
                                                {
                                                    prop.submenu.map((menu, key) =>
                                                        <Link to={menu.layout + menu.path} key={key}>{menu.name}</Link>
                                                    )
                                                }
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            }else{
                                return(
                                    <Card key={key}>
                                        <Card.Header 
                                        onClick={this.toggle} 
                                        data-event={prop.name} 
                                        className="sidebar-menu-item">
                                            <Link key={prop.name} to={prop.layout + prop.path}><i className={prop.icon}></i> {prop.name}</Link>
                                        </Card.Header>
                                    </Card>
                                )
                            }
                        })
                    }
                    </Accordion>
                    
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