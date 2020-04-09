import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsCardBadge from './NewsCard_components/NewsCardBadge';
import PropTypes from "prop-types";

class NewsCard extends Component {
  
  // TODO: finish implementing NewsCard
  render() {
    return (
      <Card>
        <Container fluid>
          <Row>
            <Col sm={3} md={3} lg={3} xl={3}>
              <Card.Img src={this.props.data.image} className='news-image home'/>
            </Col>
            <Col sm={9} md={9} lg={9} xl={9}>
              <Card.Body className='news-body home'>
                <Card.Title className='news-title home'>{this.props.data.title}</Card.Title>
                <Card.Text className='news-descp home'>{this.props.data.descp}</Card.Text>
                <Card.Text as='span' className='news-date'>{this.props.data.date}</Card.Text>
                <NewsCardBadge section={this.props.data.sectionId}/>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}

NewsCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default NewsCard;