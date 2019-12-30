import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {Container, Breadcrumb, BreadcrumbItem} from "reactstrap";

import Footer from '../../components/Footer/Footer';
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import routes from "../../routes";

class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {
            backgroundColor:"blue"
        }
    }
    getRoutes = routes => {
        return routes.map((prop, key) => {
          if (prop.layout === "/admin") {
            if(!prop.submenu){
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
                
              );
            }else{
              prop.submenu.map((menu, key) => 
                <Route
                  path={menu.layout + menu.path}
                  component={menu.component}
                  key={key}
                />
              )
            }
          } else {
            return null;
          }
        });
      };
      getTitleText = path => {
        for (let i = 0; i < routes.length; i++) {
          if (
            this.props.location.pathname.indexOf(
              routes[i].layout + routes[i].path
            ) !== -1
          ) {
            return <h4 className="page-title">{routes[i].name}</h4>;
          }
        }
        return <h4 className="page-title">Admin Panel</h4>;
      };

    
    render(){
        return(
            // eslint-disable-next-line react/react-in-jsx-scope
            <div className="wrapper">
              <AdminNavbar routes={routes} brandText={this.getTitleText(this.props.location.pathname)}/>
              <Sidebar routes={routes}/>
              <div className="content-page" ref="mainPanel" data={this.state.backgroundColor} >
                <div className="content">
                  <Container fluid>
                    <div className="page-title-box">
                      <div className="row align-items-center">
                        
                        <div className="col-sm-6">
                          {
                            this.getTitleText()
                          }
                          <Breadcrumb>
                            {
                              routes.map((prop, key) => 
                              {
                                if(prop.path){
                                  return(
                                    <BreadcrumbItem active key={key}>{prop.name}</BreadcrumbItem>
                                  )
                                }else{
                                  return(
                                    prop.submenu.map((menu, key)=>
                                    <BreadcrumbItem active key={key}>{menu.name}</BreadcrumbItem>
                                    )
                                    
                                  )
                                }
                              }
                                
                              )
                            }
                          </Breadcrumb>
                        </div>
                      </div>  
                    </div>
                    <Switch>{this.getRoutes(routes)}</Switch>
                    {// we don't want the Footer to be rendered on map page
                    this.props.location.pathname.indexOf("maps") !== -1 ? null : (
                      <Footer fluid />
                    )}
                  </Container>
                </div>
              </div>
            </div>
        )
    }
}

export default Admin;