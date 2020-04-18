import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import NewsCardBadge from "./NewsCard_components/NewsCardBadge";
import {IoMdShare} from 'react-icons/io';
import ShareModal from "./NewsCard_components/ShareModal";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

function SmallNewsCard(props) {
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
    <Card className='news-card search'>
      <Card.Body className='news-body search' onClick={handleClick}>
        <Card.Title className='news-title search'>
          {props.article.title}
          <IoMdShare onClick={handleModalShow}/>
        </Card.Title>
        <Card.Img src={props.article.image} className='news-image search'/>
        <Card.Text as='span' className='news-date'>
          {props.article.date}
        </Card.Text>
        <NewsCardBadge section={props.article.sectionId}/>
      </Card.Body>
      <ShareModal show={modalShow}
                  handleClose={handleModalClose}
                  data={props.article}/>
    </Card>
  );
}

SmallNewsCard.propTypes = {
  article: PropTypes.object.isRequired
}

export default SmallNewsCard;