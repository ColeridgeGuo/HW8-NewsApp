import React from "react";
import SmallNewsCard from "./SmallNewsCard";
import Axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BounceLoader} from "react-spinners";

import './SearchResults.css';
import {css} from "@emotion/core";

// TODO: hide toggle switch when searching
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: true
    }
  }
  
  searchArticles = query => {
    Axios.get(`/search/${query}`)
      .then(res => {
        this.setState({
          results: res.data,
          loading: false
        });
      })
  };
  
  componentDidMount() {
    const {params: {query}} = this.props.match;
    this.searchArticles(query);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    const {params: {query}} = this.props.match;
    if (query !== prevProps.match.params.query) {
      this.searchArticles(query)
      this.setState({loading: true})
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
        {this.state.loading &&
        <div className='loader'>
          <BounceLoader size={30} color={'#2b43c4'} loading={this.state.loading} css={css`margin: auto`}/>
        </div>
        }
        {!this.state.loading &&
        <Container fluid className='search-container'>
          <Row className='news-row search'>{this.state.results.slice(0, 4).map(this.displayEachCard)}</Row>
          <Row className='news-row search'>{this.state.results.slice(4, 8).map(this.displayEachCard)}</Row>
          <Row className='news-row search'>{this.state.results.slice(8, 10).map(this.displayEachCard)}</Row>
        </Container>
        }
      </>
    );
  }
}

export default SearchResults;