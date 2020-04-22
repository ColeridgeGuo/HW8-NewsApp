import React from "react";
import SmallNewsCard from "./SmallNewsCard";
import Axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BounceLoader} from "react-spinners";
import PropTypes from 'prop-types';

import './SearchResults.css';
import {css} from "@emotion/core";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: true
    }
  }
  
  searchArticles = query => {
    Axios.get(`https://csci571hw8-yingxuan-backend.wl.r.appspot.com/search/${query}`)
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
    this.props.handleHideToggle(true);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    const {params: {query}} = this.props.match;
    if (query !== prevProps.match.params.query) {
      this.searchArticles(query)
      this.setState({loading: true})
    }
  }
  
  displayEachCard = (article, i) => (
    <Col lg={3} className="news-col search" key={i}>
      <SmallNewsCard key={article.id} article={article}/>
    </Col>
  )
  
  render() {
    return (
      <>
        <h4 className="results-header">
          Results
        </h4>
        {this.state.loading &&
        <div className="loader">
          <BounceLoader size={40}
                        color={'#2b43c4'}
                        loading={this.state.loading}
                        css={css`margin: auto`}
          />
          <p className='loading-message'>Loading</p>
        </div>
        }
        {!this.state.loading &&
        <Container fluid className="search-container">
          { // four cards per row
            [0, 4, 8].map(startIndex =>
              <Row className="news-row bookmarks" key={startIndex}>
                {this.state.results.slice(startIndex, startIndex + 4).map(this.displayEachCard)}
              </Row>)
          }
        </Container>
        }
      </>
    );
  }
}

SearchResults.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object.isRequired,
  handleHideToggle: PropTypes.func.isRequired
}

export default SearchResults;