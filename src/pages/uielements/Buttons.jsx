import React, {useState, useEffect} from "react";
import {Row, Col, Card, Button, Spinner} from "react-bootstrap";

function simulateNetworkRequest(){
    return new Promise(resolve =>setTimeout(resolve, 2000))
};

function ButtonsPage(){
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
            setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return(
        <Row>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>Default Buttons</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Button variant="primary">Primary</Button>
                        <Button variant="info">Info</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="success">Success</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="light">Light</Button>
                        <Button variant="dark">Dark</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>Rounded Buttons</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Button variant="primary" className="rounded">Primary</Button>
                        <Button variant="info" className="rounded">Info</Button>
                        <Button variant="secondary" className="rounded">Secondary</Button>
                        <Button variant="success" className="rounded">Success</Button>
                        <Button variant="warning" className="rounded">Warning</Button>
                        <Button variant="danger" className="rounded">Danger</Button>
                        <Button variant="light" className="rounded">Light</Button>
                        <Button variant="dark" className="rounded">Dark</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>Outline Buttons</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Button variant="outline-primary">Primary</Button>
                        <Button variant="outline-info">Info</Button>
                        <Button variant="outline-secondary">Secondary</Button>
                        <Button variant="outline-success">Success</Button>
                        <Button variant="outline-warning">Warning</Button>
                        <Button variant="outline-danger">Danger</Button>
                        <Button variant="outline-light">Light</Button>
                        <Button variant="outline-dark">Dark</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>Button Size</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Button variant="primary" size="lg">Primary</Button>
                        <Button variant="info" size="md">Info</Button>
                        <Button variant="secondary" size="sm">Secondary</Button>
                        <Button variant="success" size="xs">Success</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>Block Buttons</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Button variant="primary" size="lg" block>Primary</Button>
                        <Button variant="info" size="md" block>Info</Button>
                        <Button variant="secondary" size="sm" block>Secondary</Button>
                        <Button variant="success" size="xs" block>Success</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>State Buttons</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Button variant="primary" size="lg" active>Primary</Button>
                        <Button variant="info" size="md" active>Info</Button>
                        <Button variant="secondary" size="sm" active>Secondary</Button>
                        <Button variant="success" size="xs" active>Success</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>Disabled Buttons</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Button variant="primary" size="lg" disabled>Primary</Button>
                        <Button variant="info" size="md" disabled>Info</Button>
                        <Button variant="secondary" size="sm" disabled>Secondary</Button>
                        <Button variant="success" size="xs" disabled>Success</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>Button Loading</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <Button
                        variant="primary"
                        disabled={isLoading}
                        onClick={!isLoading ? handleClick : null}
                    >
                        {isLoading ? <Spinner animation="border" role="status"><span className="sr-only">Loading</span></Spinner> : 'Click to load'}
                    </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ButtonsPage;