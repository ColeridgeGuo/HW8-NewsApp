import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Select from 'react-select';
import ToggleSwitch from './Header_components/ToggleSwitch';
import {FaRegBookmark} from 'react-icons/fa';

import './Header.css';

class Header extends Component {
  
  render() {
    return (
      <Navbar variant="dark" id="navbar" expand='lg'>
        <Select
          className="autosuggest"
          placeholder="Enter Keyword .."/>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Router>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="#">Home</Nav.Link>
              <Nav.Link as={Link} to="#world">World</Nav.Link>
              <Nav.Link as={Link} to="#politics">Politics</Nav.Link>
              <Nav.Link as={Link} to="#business">Business</Nav.Link>
              <Nav.Link as={Link} to="#tech">Technology</Nav.Link>
              <Nav.Link as={Link} to="#sports">Sports</Nav.Link>
            </Nav>
          </Router>
          <FaRegBookmark className="bookmark-icon"/>
          <Navbar.Text id="source-text-nytimes">NYTimes</Navbar.Text>
          <ToggleSwitch toggle={this.props.toggle} handleToggle={this.props.handleToggle}/>
          <Navbar.Text id="source-text-guardian">Guardian</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;