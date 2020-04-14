import React from 'react';
import Header from "./components/Header/Header";
import News from "./components/News/News";
import DetailNews from "./components/News/DetailNews";
import {BrowserRouter as Router, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: localStorage.getItem("toggle") === "true"
    };
  }
  
  // handle source toggling between NYTimes (false) and Guardian (true)
  handleToggle = () => {
    this.setState({"toggle": !this.state.toggle});
    localStorage.setItem("toggle", this.state.toggle); // remember toggle
    // toggling behavior is handled in News.js: componentDidUpdate
  };
  
  // TODO: use param url to reduce the # of Routes
  render() {
    return (
      <Router>
        <Header
          toggle={this.state.toggle}
          handleToggle={this.handleToggle}/>
        <Route exact path='/'>
          <News toggle={this.state.toggle} section=''/>
        </Route>
        <Route exact path='/world'>
          <News toggle={this.state.toggle} section='world'/>
        </Route>
        <Route exact path='/politics'>
          <News toggle={this.state.toggle} section='politics'/>
        </Route>
        <Route exact path='/business'>
          <News toggle={this.state.toggle} section='business'/>
        </Route>
        <Route exact path='/technology'>
          <News toggle={this.state.toggle} section='technology'/>
        </Route>
        <Route exact path='/sports'>
          <News toggle={this.state.toggle} section='sports'/>
        </Route>
  
        <Route exact path='/:src/article/:articleId' component={DetailNews}/>
      </Router>
    );
  }
}

export default App;
