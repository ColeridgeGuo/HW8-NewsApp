import React from 'react';
import Axios from "axios";
import DetailNewsCard from "./DetailNewsCard";
import PropTypes from 'prop-types';

import './DetailNews.css';

class DetailNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {article: {}};
  }
  
  retrieve_article = () => {
    const {match: {params}} = this.props;
    Axios.get(`/${params.src}/article/${params.articleId}`)
      .then(res => {
        this.setState({article: res.data})
      })
  }
  
  componentDidMount() {
    const {match: {params}} = this.props;
    this.retrieve_article(params.articleId);
  }
  
  render() {
    return (
      <>
        <DetailNewsCard data={this.state.article}/>
        <p>commentbox.io</p>
      </>
    )
  }
}

DetailNews.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default DetailNews;