import React from "react";
import Axios from "axios";
import NewsCard from "./NewsCard";
import {css} from "@emotion/core";
import BounceLoader from 'react-spinners/BounceLoader';
import PropTypes from 'prop-types';

import './News.css';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true
    };
  }
  
  // call backend to retrieve news articles
  retrieve_articles = () => {
    if (this.props.toggle) {
      Axios.get(`/guardian/${this.props.section}`)
        .then(res => {
          this.setState({
            articles: res.data.articles,
            loading: false
          });
        });
    } else {
      Axios.get(`/nytimes/${this.props.section}`)
        .then(res => {
          this.setState({
            articles: res.data.articles,
            loading: false
          });
        })
    }
  }
  
  componentDidMount() {
    this.retrieve_articles();
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.toggle !== prevProps.toggle) {
      this.retrieve_articles();
      this.setState({loading: true})
    }
  }
  
  render() {
    return (
      <>
        {this.state.loading &&
        <div className='loader'>
          <BounceLoader size={30}
                        color={'#2b43c4'}
                        loading={this.state.loading}
                        css={css`margin: auto`}/>
        </div>
        }
        {!this.state.loading &&
        this.state.articles.map((article) => (<NewsCard key={article.id} article={article}/>))
        }
      </>);
  }
}

News.propTypes = {
  toggle: PropTypes.bool.isRequired,
  section: PropTypes.string.isRequired
}

export default News;