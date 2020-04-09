import React, {Component} from 'react';
import Navigation from "./components/Navigation/Navigation";
import NewsArticles from "./components/News/NewsArticles";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {"toggle": localStorage.getItem("toggle") === "true"};
  }
  
  // handle source toggling between NYTimes (false) and Guardian (true)
  handleToggle = () => {
    this.setState({"toggle": !this.state.toggle});
    localStorage.setItem("toggle", this.state.toggle); // remember toggle
  };
  
  render() {
    return (
      <>
        <Navigation
          toggle={this.state.toggle}
          handleToggle={this.handleToggle}
        />
        <NewsArticles
          toggle={this.state.toggle}
        />
      </>
    );
  }
}

export default App;
