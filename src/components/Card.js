import React from 'react';



import Col from 'react-bootstrap/Col';

function Card(props) {
    return (
        <Col xl={4} lg={6} md={6} sm={12} className="d-flex justify-content-center">
            <div class="flip-card-container">
                <div class="flip-card d-inline-block g-card">
                    <div class="flip-card-front">
                        <img className="g-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
                    </div>
                    <div class="flip-card-back">
                        <div className="g-card-info">
                            <p className="g-card-title">{props.item.title}</p>
                            <p className="g-card-subtitle">{props.item.subTitle}</p>
                            <p>
                                <a href={props.item.link} target="_blank" rel="noopener noreferrer">Live</a>
                                <a href={props.item.github}><ion-icon name="logo-github" class="icon-big"></ion-icon></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Card;



















