import React, { Component } from 'react';
import Slide from "../../pieces/Slide";
import InfoBlock from "../../pieces/InfoBlock";
import { Container, Row, Col, Button } from 'reactstrap';
// import "./style.css";


class Main extends Component {

    constructor(props) {
        super();

        this.state= {
            loading: true
        }
    }

    render() {
        console.log(this.state);

        const myButton = {
            text: "GitHub Profile",
            style: {
                backgroundColor: "rgb(49,103,127)",
                color: "#eee"
            }
        }

        const profile = {
            image: "http://rajawaseem6.files.wordpress.com/2014/02/dsaf.jpg",
            style: {
                height: "200px",
                width: "200px"
            }
        } 

        return (
            <div className="Main">
                <Container>

                    <Row>
                        <h3>My main page</h3>
                    </Row>

                    <Row>
                        <Col>
                            <Slide 
                                style={{width: "60%", border: "solid black 1px"}}
                                title="Kyle Foster"
                                subtitle="Master Coder"
                                card_image={profile}
                            >
                                Also Known As the greatest dude to code a webpage... EVER..

                                <a href="https://github.com/Foscat">
                                    <Button style={myButton.style}>
                                        {myButton.text}
                                    </Button>
                                </a>
                            </Slide>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <InfoBlock
                                style={{width: "30%", backgroundColor: "lightblue"}}
                                title="About Me"
                                subtitle="The story of a up-and-comer prodigy of web-development"
                            >

                                <p>Im pretty much awesome in about every way possible</p>                                
                            </InfoBlock>
                        </Col>
                    </Row>


                </Container>
            </div> //End main Component
        );
    }

}

export default Main;