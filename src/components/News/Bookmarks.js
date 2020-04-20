import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SmallNewsCard from "./SmallNewsCard";
import PropTypes from 'prop-types';

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favorites: []}
  }
  
  componentDidMount() {
    this.setState({favorites: JSON.parse(localStorage.getItem('favorites'))});
    this.props.handleHideToggle(true);
  }
  
  displayEachCard = (article, i) => (
    <Col lg={3} className='news-col bookmarks' key={i}>
      <SmallNewsCard key={article.id} article={article}/>
    </Col>
  )
  
  render() {
    return (
      <>
        <h4 className='results-header favorites'>
          Favorites
        </h4>
        <Container fluid className='bookmarks-container'>
          { // four cards per row
            [...Array(this.state.favorites.length).keys()].filter(num => num % 4 === 0)
              .map(startIndex =>
                <Row className='news-row bookmarks' key={startIndex}>
                  {this.state.favorites.slice(startIndex, startIndex + 4).map(this.displayEachCard)}
                </Row>)
          }
        </Container>
      </>
    );
  }
}

Bookmarks.propTypes = {
  handleHideToggle: PropTypes.func.isRequired
}

export default Bookmarks;