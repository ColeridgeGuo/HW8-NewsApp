import React from 'react';
import Header from "./components/Header/Header";
import News from "./components/News/News";
import DetailNews from "./components/News/DetailNews";
import SearchResults from "./components/News/SearchResults";
import Bookmarks from "./components/News/Bookmarks";
import {BrowserRouter as Router, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: localStorage.getItem("toggle") === "true",
      hideToggle: false
    };
  }
  
  // handle source toggling between NYTimes (false) and Guardian (true)
  handleToggle = () => {
    this.setState({toggle: !this.state.toggle});
    localStorage.setItem('toggle', this.state.toggle); // remember toggle
    // toggling behavior is handled in News.js: componentDidUpdate
  }
  
  handleHideToggle = () => {
    this.setState({hideToggle: true})
  }
  
  handleShowToggle = () => {
    this.setState({hideToggle: false})
  }
  
  // TODO: use param url to reduce the # of Routes
  render() {
    return (
      <Router>
        <Header
          toggle={this.state.toggle}
          handleToggle={this.handleToggle}
          hideToggle={this.state.hideToggle}
        />
        <Route exact path='/'>
          <News toggle={this.state.toggle} handleShowToggle={this.handleShowToggle} section=''/>
        </Route>
        <Route exact path='/world'>
          <News toggle={this.state.toggle} handleShowToggle={this.handleShowToggle} section='world'/>
        </Route>
        <Route exact path='/politics'>
          <News toggle={this.state.toggle} handleShowToggle={this.handleShowToggle} section='politics'/>
        </Route>
        <Route exact path='/business'>
          <News toggle={this.state.toggle} handleShowToggle={this.handleShowToggle} section='business'/>
        </Route>
        <Route exact path='/technology'>
          <News toggle={this.state.toggle} handleShowToggle={this.handleShowToggle} section='technology'/>
        </Route>
        <Route exact path='/sports'>
          <News toggle={this.state.toggle} handleShowToggle={this.handleShowToggle} section='sports'/>
        </Route>
        
        <Route exact path='/:src/article/:articleId' component={DetailNews}/>
        <Route exact path='/search/:query' render={routeProps => (
          <SearchResults {...routeProps} handleHideToggle={this.handleHideToggle}/>)}
        />
        <Route exact path='/bookmarks' render={() => (
          <Bookmarks handleHideToggle={this.handleHideToggle}/>)}
        />
      </Router>
    );
  }
}

export default App;
