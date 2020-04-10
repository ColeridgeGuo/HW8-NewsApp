import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsCardBadge from './NewsCard_components/NewsCardBadge';
import {IoMdShare} from 'react-icons/io';
import ShareModal from "./NewsCard_components/ShareModal";
import PropTypes from "prop-types";

function NewsCard(props) {
  const [modalShow, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);
  // TODO: add border around images
  // TODO: make card clickable to detail page
  return (
    <Card className='news-card'>
      <Container fluid>
        <Row>
          <Col lg={3}>
            <Card.Img src={props.article.image} className='news-image home'/>
          </Col>
          <Col lg={9}>
            <Card.Body className='news-body home'>
              <Card.Title className='news-title home'>
                {props.article.title}
                <IoMdShare onClick={handleModalShow}/>
              </Card.Title>
              <Card.Text className='news-descp home'>
                {props.article.descp}
              </Card.Text>
              <Card.Text as='span' className='news-date'>
                {props.article.date}
              </Card.Text>
              <NewsCardBadge section={props.article.sectionId}/>
            </Card.Body>
          </Col>
        </Row>
      </Container>
      <ShareModal show={modalShow}
                  handleClose={handleModalClose}
                  data={props.article}/>
    </Card>
  );
}

NewsCard.propTypes = {
  article: PropTypes.object.isRequired
}

export default NewsCard;