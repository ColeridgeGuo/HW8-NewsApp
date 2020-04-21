import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SmallNewsCard from "../SearchNews/SmallNewsCard";
import PropTypes from 'prop-types';
import {toast} from "react-toastify";

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favorites: []}
  }
  
  componentDidMount() {
    this.setState({favorites: JSON.parse(localStorage.getItem('favorites'))});
    this.props.handleHideToggle(true);
  }
  
  // handle remove bookmark
  removeBookmark = (event, data) => {
    event.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const newFavorites = favorites.filter(article => article.id !== data.id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    this.setState({favorites: newFavorites});
    toast(`Removing - ${data.title}`)
  }
  
  displayEachCard = (article, i) => (
    <Col lg={3} className="news-col bookmarks" key={i}>
      <SmallNewsCard key={article.id}
                     article={article}
                     removeBookmark={this.removeBookmark}
      />
    </Col>
  )
  
  render() {
    return (
      <>
        {this.state.favorites.length > 0 &&
        <>
          <h4 className="results-header favorites">
            Favorites
          </h4>
          <Container fluid className="bookmarks-container">
            { // four cards per row
              [...Array(this.state.favorites.length).keys()].filter(num => num % 4 === 0)
                .map(startIndex =>
                  <Row className="news-row bookmarks" key={startIndex}>
                    {this.state.favorites.slice(startIndex, startIndex + 4).map(this.displayEachCard)}
                  </Row>)
            }
          </Container>
        </>
        }
        {
          this.state.favorites.length === 0 &&
          <h4 className="no-bookmark-warning">You have no saved articles</h4>
        }
      </>
    );
  }
}

Bookmarks.propTypes = {
  handleHideToggle: PropTypes.func.isRequired
}

export default Bookmarks;