import React from 'react';
import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
          <Container>
                <Row>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                            <Nav className="ml-auto" navbar>
                                <Col>
                                    <NavItem>
                                        <NavLink href="/">
                                            Main
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/portfolio">
                                            Portfolio
                                        </NavLink>
                                    </NavItem>
                                </Col>
                            </Nav>
                    </Navbar>
                </Row>
          </Container>
        
      </div>
    );
  }
}