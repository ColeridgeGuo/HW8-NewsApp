import React from "react";
import Axios from "axios";
import NewsCard from "./NewsCard";
import {css} from "@emotion/core";
import BounceLoader from 'react-spinners/BounceLoader';
import PropTypes from 'prop-types';

import './HomeNews.css';

class HomeNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true
    };
  }
  
  // call backend to retrieve news articles
  retrieve_articles = () => {
    const source = this.props.toggle ? 'guardian' : 'nytimes';
    Axios.get(`/${source}/${this.props.section}`)
      .then(res => {
        this.setState({
          articles: res.data.articles,
          loading: false
        });
      });
  }
  
  componentDidMount() {
    this.retrieve_articles();
    this.props.handleHideToggle(false);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.toggle !== prevProps.toggle) {
      this.retrieve_articles();
      this.setState({loading: true})
    }
  }
  
  render() {
    return (
      <>
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
        this.state.articles.map((article) => (<NewsCard key={article.id} article={article}/>))
        }
      </>);
  }
}

HomeNews.propTypes = {
  toggle: PropTypes.bool.isRequired,
  section: PropTypes.string.isRequired,
  handleHideToggle: PropTypes.func.isRequired
}

export default HomeNews;