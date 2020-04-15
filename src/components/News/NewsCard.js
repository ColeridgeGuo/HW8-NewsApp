import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsCardBadge from './NewsCard_components/NewsCardBadge';
import {IoMdShare} from 'react-icons/io';
import ShareModal from "./NewsCard_components/ShareModal";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

function NewsCard(props) {
  // handle showing sharing modals
  const [modalShow, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = (event) => {
    setModalShow(true);
    event.stopPropagation();
  }
  
  let history = useHistory();
  const handleClick = () => {
    if (props.article.src === 'nytimes')
      history.push(`/nytimes/article/${encodeURIComponent(props.article.url)}`);
    else if (props.article.src === 'guardian')
      history.push(`/guardian/article/${encodeURIComponent(props.article.id)}`);
  };
  
  return (
    <Card className='news-card home'>
      <Container fluid className='news-card-container home' onClick={handleClick}>
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