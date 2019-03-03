import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  
  const Slide = (props) => {
    return (
      <div>
        <Card style={props.style}>

          <CardImg 
            style={props.card_image.style} 
            src={props.card_image.image} 
            alt="Card image cap" 
          />

          <CardBody>

            <CardTitle>
              <h2>{props.title}</h2>
            </CardTitle>

            <CardSubtitle>
              <h4>{props.subtitle}</h4>
            </CardSubtitle>

            <CardText>
              {props.children}
            </CardText>

          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default Slide;