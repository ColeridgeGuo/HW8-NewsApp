import React from "react";
import Axios from "axios";
import NewsCard from "./NewsCard";
import PropTypes from 'prop-types';

import './News.css';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {articles: []};
  }
  
  // call backend to retrieve news articles
  retrieve_articles = () => {
    if (this.props.toggle) {
      Axios.get(`/guardian/${this.props.section}`)
        .then(res => {
          this.setState({articles: res.data.articles});
        });
    } else {
      Axios.get(`/nytimes/${this.props.section}`)
        .then(res => {
          this.setState({articles: res.data.articles});
        })
    }
  }
  
  componentDidMount() {
    this.retrieve_articles();
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.toggle !== prevProps.toggle) {
      this.retrieve_articles();
    }
  }
  
  render() {
    return this.state.articles.map(
      (article) => (
        <NewsCard key={article.id}
                  article={article}/>
      )
    );
  }
}

News.propTypes = {
  toggle: PropTypes.bool.isRequired,
  section: PropTypes.string.isRequired
}

export default News;