import React, {Component} from "react";
import Axios from "axios";
import NewsCard from "./NewsCard";
import PropTypes from 'prop-types';

import './News.css';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: []};
  }
  
  componentDidMount() {
    if (this.props.toggle) {
      Axios.get('/guardian')
        .then(res => {
          this.setState({articles: res.data.articles});
        });
    } else {
      Axios.get('/nytimes')
        .then(res => {
          this.setState({articles: res.data.articles});
        })
    }
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.toggle !== prevProps.toggle) {
      if (this.props.toggle) {
        Axios.get('/guardian')
          .then(res => {
            this.setState({articles: res.data.articles})
          });
      } else {
        Axios.get('/nytimes')
          .then(res => {
            this.setState({articles: res.data.articles})
          })
      }
    }
  }
  
  render() {
    return this.state.articles.map(
      (article) => (
        <NewsCard key={article.id}
                  articles={article}/>
      )
    );
  }
}

News.propTypes = {
  toggle: PropTypes.bool.isRequired
}

export default News;