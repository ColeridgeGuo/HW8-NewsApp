import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import {NavLink} from 'react-router-dom';
import SearchSelect from "./Header_components/SearchSelect";
import ToggleSwitch from './Header_components/ToggleSwitch';
import {FaRegBookmark} from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import './Header.css';

class Header extends Component {
  
  render() {
    return (
      <Navbar variant="dark" id="navbar" expand='lg'>
        <SearchSelect/>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/world">World</Nav.Link>
            <Nav.Link as={NavLink} to="/politics">Politics</Nav.Link>
            <Nav.Link as={NavLink} to="/business">Business</Nav.Link>
            <Nav.Link as={NavLink} to="/technology">Technology</Nav.Link>
            <Nav.Link as={NavLink} to="/sports">Sports</Nav.Link>
          </Nav>
          <FaRegBookmark className="bookmark-icon" data-tip data-for='bookmark-tip-header'/>
          <ReactTooltip place='bottom' effect='solid' id='bookmark-tip-header'>
            Bookmark
          </ReactTooltip><br/>
          <Navbar.Text className="source-text">NYTimes</Navbar.Text><br/>
          <ToggleSwitch
            toggle={this.props.toggle}
            handleToggle={this.props.handleToggle}/><br/>
          <Navbar.Text className="source-text">Guardian</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default Header;