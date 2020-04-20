import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";
import {FaRegBookmark, FaBookmark} from 'react-icons/fa';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import ReactTooltip from 'react-tooltip';
import {toast} from 'react-toastify';
import {Container, Row, Col} from "react-bootstrap";
import PropTypes from "prop-types";

function DetailNewsCard(props) {
  let savedArticles = [];
  if (localStorage.getItem('favorites') !== null) {
    savedArticles = JSON.parse(localStorage.getItem('favorites'));
  }
  const isArticleSaved = (arr, val) => arr.some(article => val.id === article.id);
  // state for saved articles (bookmarks)
  const [saved, setSaved] = useState(isArticleSaved(savedArticles, props.data));
  const addBookmark = () => {
    savedArticles.push(props.data);
    localStorage.setItem('favorites', JSON.stringify(savedArticles));
    toast(`Saving ${props.data.title}`);
    setSaved(true);
  }
  const removeBookmark = () => {
    const newSaved = savedArticles.filter(article => article.id !== props.data.id);
    localStorage.setItem('favorites', JSON.stringify(newSaved));
    toast(`Removing - ${props.data.title}`)
    setSaved(false);
  }
  
  // state for expanding the description
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => {
    if (expand) {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      setTimeout(() => setExpand(!expand), 1000);
    } else {
      window.scrollBy({top: 3000, left: 0, behavior: 'smooth'})
      setExpand(!expand);
    }
  }
  // determine if the description is long enough to expand/collapse
  const longDescp = () => props.data.descp.length > 1000
  
  return (
    <Card className='news-card detail'>
      <Card.Title className='news-header detail'>
        <Card.Text className='news-title detail'>{props.data.title}</Card.Text>
        <Container fluid='xs'>
          <Row noGutters={true}>
            <Col xs={6} sm={8} md={9} lg={10}>
              <Card.Text as='span' className='news-date detail'>{props.data.date}</Card.Text>
            </Col>
            <Col xs={4} sm={2} md={2} lg={1}>
              <span className='news-share detail'>
                <FacebookShareButton url={props.data.url} hashtag='#CSCI_571_NewsApp'>
                  <FacebookIcon round size='25' data-tip data-for='facebook-tip'/>
                </FacebookShareButton>
                <ReactTooltip place='top' effect='solid' id='facebook-tip'>
                  Facebook
                </ReactTooltip>
                <TwitterShareButton url={props.data.url} hashtags={['CSCI_571_NewsApp']}>
                  <TwitterIcon round size='25' data-tip data-for='twitter-tip'/>
                </TwitterShareButton>
                <ReactTooltip place='top' effect='solid' id='twitter-tip'>
                  Twitter
                </ReactTooltip>
                <EmailShareButton subject='#CSCI_571_NewsApp' url={props.data.url}>
                  <EmailIcon round size='25' data-tip data-for='email-tip'/>
                </EmailShareButton>
                <ReactTooltip place='top' effect='solid' id='email-tip'>
                  Email
                </ReactTooltip>
              </span>
            </Col>
            <Col xs={2} sm={2} md={1} lg={1}>
              <span className='news-bookmark detail'>
                {!saved &&
                <><FaRegBookmark data-tip data-for='bookmark-tip-detail' onClick={addBookmark}/>
                  <ReactTooltip place='top' effect='solid' id='bookmark-tip-detail'>
                    Bookmark
                  </ReactTooltip></>
                }
                {saved &&
                <><FaBookmark data-tip data-for='bookmark-tip-detail' onClick={removeBookmark}/>
                  <ReactTooltip place='top' effect='solid' id='bookmark-tip-detail'>
                    Bookmark
                  </ReactTooltip></>
                }
              </span>
            </Col>
          </Row>
        </Container>
      </Card.Title>
      <Card.Img src={props.data.image} className='news-image detail'/>
      <Card.Body className='news-body detail'>
        {!longDescp() &&
        <Card.Text className='news-descp detail'>
          {props.data.descp}
        </Card.Text>
        }
        {expand && longDescp() &&
        <>
          <Card.Text className='news-descp detail expand'>
            {props.data.descp}
          </Card.Text>
          <IoIosArrowUp className='descp-arrow' onClick={toggleExpand}/>
        </>
        }
        {!expand && longDescp() &&
        <>
          <Card.Text className='news-descp detail collapse'>
            {props.data.descp}
          </Card.Text>
          <IoIosArrowDown className='descp-arrow' onClick={toggleExpand}/>
        </>
        }
      </Card.Body>
    </Card>
  );
}

DetailNewsCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default DetailNewsCard;