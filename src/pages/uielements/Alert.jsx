import React from "react";
import {Row, Col, Card, Alert, Button} from 'react-bootstrap';

class AlertPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible:true,
            show:true
        }
        this.onDismis = this.onDismis.bind(this);
        this.onShow = this.onShow.bind(this);
    }
    onShow(){
        this.setState({
            show:!this.state.show
        })
    }
    onDismis(){
        this.setState({
            visible: !this.state.visible
        })
    }
    render(){
        let alertClose;

        if(this.state.show){
                alertClose = <Alert variant="danger" onClose={() => this.onShow(false)} dismissible>
                                    <strong>Well done!</strong> You successfully read his important alert message.
                                </Alert>
        }else{
            alertClose = <Button onClick={() => this.onShow(true)}>Show Alert</Button>
        }
        return(
            <Row>
                <Col md="6">
                    <Card>
                        <Card.Body>
                            <Card.Title>Examples</Card.Title>
                            <Card.Text>
                                Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four required contextual classes (e.g., <span className="text-danger">.alert-success</span>). For inline dismissal, use the alerts jQuery plugin.
                            </Card.Text>
                            {
                                [
                                    'primary',
                                    'secondary',
                                    'success',
                                    'danger',
                                    'warning',
                                    'info',
                                    'light',
                                    'dark',
                                  ].map((variant, idx) => (
                                    <Alert key={idx} variant={variant}>
                                      This is a {variant} alert—check it out!
                                    </Alert>
                                  ))
                            }
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <Card.Body>
                            <Card.Title>Link Color</Card.Title>
                            <Card.Text>
                                Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four required contextual classes (e.g., <span className="text-danger">.alert-success</span>). For inline dismissal, use the alerts jQuery plugin.
                            </Card.Text>
                            {
                                [
                                    'primary',
                                    'secondary',
                                    'success',
                                    'danger',
                                    'warning',
                                    'info',
                                    'light',
                                    'dark',
                                  ].map((variant, idx) => (
                                    <Alert key={idx} variant={variant}>
                                      This is a {variant} alert with{' '}
                                      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
                                      like.
                                    </Alert>
                                  ))
                            }
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <Card.Body>
                            <Card.Title>Dismissing</Card.Title>
                            <Card.Text>
                            You can see this in action with a live demo:
                            </Card.Text>
                            
                            {
                                alertClose
                            }
                            
                            {/* <Alert color="success" isOpen={this.state.visible} toggle={this.onDismis}><strong>Well done!</strong> You successfully read his important alert message.</Alert>
                            <Alert color="info" isOpen={this.state.visible} toggle={this.onDismis}><strong>Heads up!</strong> This alert needs your attention,but it's not super important.</Alert>
                            <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismis}><strong>Warning!</strong> Better check yourself,you're not looking too good.</Alert>
                            <Alert color="primary" isOpen={this.state.visible} toggle={this.onDismis}><strong>Well done!</strong> You successfully reathis important alert message.</Alert>
                            <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismis}><strong>Oh snap!</strong> Change a few things up andtry submitting again.</Alert> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <Card.Body>
                            <Card.Title>Link Color</Card.Title>
                            <Card.Text>
                                Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four required contextual classes (e.g., <span className="text-danger">.alert-success</span>). For inline dismissal, use the alerts jQuery plugin.
                            </Card.Text>
                            {
                                [
                                    'primary',
                                    'secondary',
                                    'success',
                                    'danger',
                                    'warning',
                                    'info',
                                    'light',
                                    'dark',
                                  ].map((variant, idx) => (
                                    <Alert key={idx} variant={variant}>
                                      <Alert.Heading>How's it going?!</Alert.Heading>
                                        <p>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                        fermentum.
                                        </p>
                                        <hr />
                                        <div className="d-flex justify-content-end">
                                        <Button onClick={() => this.onShow(false)} variant="outline-success">
                                            Close me ya'll!
                                        </Button>
                                    </div>
                                    </Alert>
                                  ))
                            }
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <Card.Body>
                            <Card.Title>Examples</Card.Title>
                            <Card.Text>
                                Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four required contextual classes (e.g., <span className="text-danger">.alert-success</span>). For inline dismissal, use the alerts jQuery plugin.
                            </Card.Text>
                            {
                                [
                                    'primary',
                                    'secondary',
                                    'success',
                                    'danger',
                                    'warning',
                                    'info',
                                    'light',
                                    'dark',
                                  ].map((variant, idx) => (
                                    <Alert className={`bg-${variant}`} key={idx} variant={variant}>
                                      This is a {variant} alert—check it out!
                                    </Alert>
                                  ))
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default AlertPage;