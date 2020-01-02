import React from "react";
import {Row, Col, Card, Button} from "react-bootstrap";
import Slider from "react-slick";

function CarouselPage(){
    const settings = {
        dots:true,
        fade: true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        SlidesToScroll:1,
        prevArrow: <div className="slider-prev" style={{display: "block", background: "red" }}><i className="icon-angle-left"></i></div>,
        nextArrow:<div className="slider-next" style={{display: "block", background: "red" }}><i className="icon-angle-right"></i></div>
    }
    return(
        <Row>
            <Col md="12">
                <Slider {...settings}>
                    <div><img className="img-fluid w-100" src="http://placehold.it/800X300" alt=""/></div>
                    <div><img className="img-fluid w-100" src="http://placehold.it/800X300" alt=""/></div>
                    <div><img className="img-fluid w-100" src="http://placehold.it/800X300" alt=""/></div>
                </Slider>
            </Col>
        </Row>
    )
}

export default CarouselPage;