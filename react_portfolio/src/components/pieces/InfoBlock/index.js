import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
  
  const InfoBlock = (props) => {
    return (
      <div>
        <Card style={props.style}>
          
          <CardBody>

            <CardTitle>
              <h2>{props.title}</h2>
            </CardTitle>

            <CardSubtitle>
              <h4>{props.subtitle}</h4>
            </CardSubtitle>

            <CardText>
              <div>
                {props.children}
              </div>
            </CardText>

          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default InfoBlock;