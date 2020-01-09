import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form'

class Navigation extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <Navbar bg="light" expand="lg" className="customnav">
                <Navbar.Brand href="#home">
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#link">Instagram</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-0" />
                </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
