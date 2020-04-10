import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsCardBadge from './NewsCard_components/NewsCardBadge';
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";

function NewsCard(props) {
  return (
    <Card className='news-card'>
      <Container fluid>
        <Row>
          <Col sm={6} md={5} lg={4} xl={3}>
            <Image src={props.articles.image} className='news-image home' fluid/>
          </Col>
          <Col sm={6} md={7} lg={8} xl={9}>
            <Card.Body className='news-body home'>
              <Card.Title className='news-title home'>{props.articles.title}</Card.Title>
              <Card.Text className='news-descp home'>{props.articles.descp}</Card.Text>
              <Card.Text as='span' className='news-date'>{props.articles.date}</Card.Text>
              <NewsCardBadge section={props.articles.sectionId}/>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

NewsCard.propTypes = {
  articles: PropTypes.object.isRequired
}

export default NewsCard;