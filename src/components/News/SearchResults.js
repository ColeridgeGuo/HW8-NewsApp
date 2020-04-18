import React from "react";
import SmallNewsCard from "./SmallNewsCard";
import Axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './SearchResults.css';

// TODO: hide toggle switch when searching
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: props.match.params.query
    }
  }
  
  searchArticles = query => {
    Axios.get(`/search/${query}`)
      .then(res => {
        this.setState({results: res.data});
      })
  };
  
  componentDidMount() {
    this.searchArticles(this.state.query);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    // TODO: handle another search from search page, force re-render
    if (this.state.query !== prevState.query) {
      console.log(this.state.query)
      this.searchArticles(this.state.query)
    }
  }
  
  displayEachCard = (article, i) => (
    <Col lg={3} className='news-col search' key={i}>
      <SmallNewsCard key={article.id} article={article}/>
    </Col>
  )
  
  render() {
    return (
      <>
        <h4 className='results-header'>
          Results
        </h4>
        <Container fluid className='search-container'>
          <Row className='news-row search'>{this.state.results.slice(0, 4).map(this.displayEachCard)}</Row>
          <Row className='news-row search'>{this.state.results.slice(4, 8).map(this.displayEachCard)}</Row>
          <Row className='news-row search'>{this.state.results.slice(8, 10).map(this.displayEachCard)}</Row>
        </Container>
      </>
    );
  }
}

export default SearchResults;