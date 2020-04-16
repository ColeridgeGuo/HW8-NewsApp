import React from 'react';
import Axios from "axios";
import DetailNewsCard from "./DetailNewsCard";
import commentBox from 'commentbox.io';
import {css} from "@emotion/core";
import BounceLoader from 'react-spinners/BounceLoader';
import PropTypes from 'prop-types';

import './DetailNews.css';

class DetailNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      src: this.props.match.params.src,
      articleId: this.props.match.params.articleId,
      loading: true
    };
  }
  
  retrieve_article = () => {
    Axios.get(`/${this.state.src}/article/${this.state.articleId}`)
      .then(res => {
        this.setState({
          article: res.data,
          loading: false
        })
      })
  }
  
  componentDidMount() {
    this.retrieve_article(this.state.articleId);
    this.removeCommentBox = commentBox('5644271453470720-proj', {
      createBoxUrl(boxId, pageLocation) {
        pageLocation.search = '';
        pageLocation.hash = boxId;
        return decodeURIComponent(pageLocation.href);
      }
    });
  }
  
  componentWillUnmount() {
    this.removeCommentBox();
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
        <DetailNewsCard data={this.state.article}/>
        }
        <div className='commentbox' id={this.state.articleId}/>
      </>
    )
  }
}

DetailNews.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object.isRequired
}

export default DetailNews;