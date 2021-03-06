import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import SearchSelect from "./HeaderComponents/SearchSelect";
import ToggleSwitch from './HeaderComponents/ToggleSwitch';
import {FaRegBookmark, FaBookmark} from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import './Header.css';

function Header(props) {
  let location = useLocation();
  let history = useHistory();
  
  const openBookmarks = open => {
    open ? history.push('/bookmarks') : history.goBack()
  }
  
  return (
    <Navbar variant="dark" id="navbar" expand="lg">
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
        {location.pathname !== '/bookmarks' &&
        <>
          <FaRegBookmark className="bookmark-icon"
                         data-tip data-for="bookmark-tip-header"
                         onClick={_ => openBookmarks(true)}/>
          <ReactTooltip place="bottom" effect="solid" id="bookmark-tip-header">
            Bookmark
          </ReactTooltip><br/>
        </>
        }
        {location.pathname === '/bookmarks' &&
        <>
          <FaBookmark className="bookmark-icon"
                      data-tip data-for="bookmark-tip-header"
                      onClick={_ => openBookmarks(false)}/>
          <ReactTooltip place="bottom" effect="solid" id="bookmark-tip-header">
            Bookmark
          </ReactTooltip><br/>
        </>
        }
        {!props.hideToggle &&
        <>
          <Navbar.Text className="source-text">NYTimes</Navbar.Text><br/>
          <ToggleSwitch
            toggle={props.toggle}
            handleToggle={props.handleToggle}/><br/>
          <Navbar.Text className="source-text">Guardian</Navbar.Text>
        </>
        }
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default Header;