import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Select from 'react-select';
import ToggleSwitch from './ToggleSwitch';
import {FaRegBookmark} from 'react-icons/fa';

class Navigation extends Component {
  
  render() {
    return (
      <Navbar variant="dark" id="navbar" expand='md'>
        <Select
          className="autosuggest"
          placeholder="Enter Keyword .."/>
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
        <ToggleSwitch checked={this.props.toggle} handleToggle={this.props.handleToggle}/>
        <Navbar.Text id="source-text-guardian">Guardian</Navbar.Text>
      </Navbar>
    );
  }
}

export default Navigation;