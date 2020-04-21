import React from "react";
import Modal from "react-bootstrap/Modal";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";
import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useLocation} from 'react-router-dom';

import './ShareModal.css';

function ShareModal(props) {
  const location = useLocation();
  return (
    <Modal show={props.show} onHide={props.handleClose} size='md'>
      <Modal.Header closeButton>
        <Modal.Title>
          {location.pathname === '/bookmarks' &&
          <div className="modal-title-src">{props.data.src.toUpperCase()}</div>
          }
          <div className="modal-title-title">{props.data.title}</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='share-modal-body'>
        Share via
        <Container>
          <Row>
            <Col>
              <FacebookShareButton
                url={props.data.url}
                hashtag='#CSCI_571_NewsApp'>
                <FacebookIcon round/>
              </FacebookShareButton>
            </Col>
            <Col>
              <TwitterShareButton
                url={props.data.url}
                hashtags={['CSCI_571_NewsApp']}>
                <TwitterIcon round/>
              </TwitterShareButton>
            </Col>
            <Col>
              <EmailShareButton
                subject='#CSCI_571_NewsApp'
                url={props.data.url}>
                <EmailIcon round/>
              </EmailShareButton>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

ShareModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

export default ShareModal;