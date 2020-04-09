import React, {Component} from "react";
import Axios from "axios";
import NewsCard from "./NewsCard";

class NewsArticles extends Component {
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
          this.setState({articles: res.data.articles})
        })
    }
  }
  
  render() {
    return this.state.articles.map(
      (article) => (
        <NewsCard key={article.id}
                  data={article}/>
      )
    );
  }
}

export default NewsArticles;