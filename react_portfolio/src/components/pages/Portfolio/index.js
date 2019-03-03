import React, { Component } from 'react';
import Slide from "../../pieces/Slide";
import InfoBlock from "../../pieces/InfoBlock";
import { Container, Row, Col, Button } from 'reactstrap';
import classAssignments from  "../../../jsonLists/classAssignments.json";
import "./style.css";


class Portfolio extends Component {

    constructor(props) {
        super();

        this.state= {
            classAssignments,
            loading: "true"
        }
    }

    render() {
        console.log(this.state);

        const portHead_img = {
            image: "https://www.americannursetoday.com/wp-content/uploads/2007/01/portfolio_professional_timeline-720x300.jpg",
            style: {
                height: "150px",
                width: "350px"
            }
        }
        
        return (
            <div className="Portfolio">

                <Container>
                    <Row>
                        <Slide
                            style={{width: "75%", border: "darkgrey solid 2px", backgroundColor: "cornsilk"}}
                            title="My Portfolio"
                            subtitle="An assortment of my various projects."
                            card_image={portHead_img}
                        >
                        </Slide>
                    </Row>

                    <Row>
                        <Col>
                            <InfoBlock
                                style={{width: "90%", border: "darkblue solid 2px", backgroundColor: "cornsilk"}}
                                title="My apps"
                                subtitle="Container for all my coding projects with links"
                            >

                                {this.state.classAssignments.map(classApp => (
                                    <Slide
                                        id={classApp.id}
                                        key={classApp.id}
                                        style={{width: "40%", border:"1px red solid"}}
                                        title={classApp.appName}
                                        subtitle={classApp.description}
                                        card_image={classApp.imageInfo}
                                    >
                                        <ul>
                                            {classApp.techUsed.map(tech => (
                                                <li>{tech}</li>
                                            ))}
                                        </ul>

                                        <a href={classApp.deployedVersion}>
                                                <Button>
                                                    Deployed Version
                                                </Button>
                                        </a>

                                        <a href={classApp.repoUrl}>
                                                <Button>
                                                    GitHib Repo
                                                </Button>
                                        </a>

                                    </Slide>
                                ))}
                                
                            </InfoBlock>
                        </Col>
                    </Row>
                </Container>


                
            </div>
        );
    }

}

export default Portfolio;