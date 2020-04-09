import React, {Component} from "react";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

class NewsCardBadge extends Component {
  constructor(props) {
    super(props);
    this.badge_bgColor_mapping = {
      'world': 'rgb(103,44,255)',
      'politics': 'rgb(53,131,117)',
      'business': 'rgb(57,129,230)',
      'technology': 'rgb(196,216,44)',
      'sports': 'rgb(242,183,53)',
      'any_other': 'rgb(91,98,104)',
      'guardian_fav': 'rgb(16,28,58)',
      'nytimes_fav': 'rgb(213,213,213)'
    };
    this.badge_txtColor_mapping = {
      'world': 'white',
      'politics': 'white',
      'business': 'white',
      'technology': 'black',
      'sports': 'black',
      'any_other': 'white',
      'guardian_fav': 'white',
      'nytimes_fav': 'black'
    };
  }
  
  render() {
    return (
      <Badge as='span'
             style={{
               backgroundColor: this.badge_bgColor_mapping[this.props.section],
               color: this.badge_txtColor_mapping[this.props.section]
             }}
             className='news-section-badge'>
        {this.props.section}
      </Badge>
    );
  }
}

NewsCardBadge.propTypes = {
  section: PropTypes.string.isRequired
};

export default NewsCardBadge;