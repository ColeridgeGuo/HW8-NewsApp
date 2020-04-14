import React from "react";
import Card from 'react-bootstrap/Card';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";
import {FaRegBookmark} from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import {Container, Row, Col} from "react-bootstrap";
import PropTypes from "prop-types";

function DetailNewsCard(props) {
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
                <EmailShareButton subject='#CSCI_571_NewsApp' url={props.data.url} body={props.data.url}>
                  <EmailIcon round size='25' data-tip data-for='email-tip'/>
                </EmailShareButton>
                <ReactTooltip place='top' effect='solid' id='email-tip'>
                  Email
                </ReactTooltip>
              </span>
            </Col>
            <Col xs={2} sm={2} md={1} lg={1}>
              <span className='news-bookmark detail'>
                <FaRegBookmark data-tip data-for='bookmark-tip-detail'/>
                <ReactTooltip place='top' effect='solid' id='bookmark-tip-detail'>
                  Bookmark
                </ReactTooltip>
              </span>
            </Col>
          </Row>
        </Container>
      </Card.Title>
      <Card.Img src={props.data.image} className='news-image detail'/>
      <Card.Body className='news-body detail'>
        <Card.Text className='news-descp detail'>
          {props.data.descp}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

DetailNewsCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default DetailNewsCard;