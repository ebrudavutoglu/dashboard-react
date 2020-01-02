import React from "react";
import {Row, Col, Card, Button, ListGroup} from "react-bootstrap";

function CardPage(){
    return(
        <Row>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>Basic Card</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card>
                            <Card.Img src="http://placehold.it/800X300"></Card.Img>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Button variant="outline-primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>Content Type</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card>
                            <Card.Body>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Body>
                            <Card body className="mt-3">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card>
                        </Card>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>Title, Text and Links</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="6">
                <Card>
                    <Card.Header>
                        <Card.Title>List Group</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default CardPage;