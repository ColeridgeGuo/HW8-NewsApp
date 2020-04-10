import React, {Component} from 'react';
import Header from "./components/Header/Header";
import News from "./components/News/News";

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
    // toggling behavior is handled in News.js: componentDidUpdate
  };
  
  render() {
    return (
      <>
        <Header
          toggle={this.state.toggle}
          handleToggle={this.handleToggle}
        />
        <News
          toggle={this.state.toggle}
        />
      </>
    );
  }
}

export default App;
