import React from "react";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

const badge_bgColor = {
  world: 'rgb(103,44,255)',
  politics: 'rgb(53,131,117)',
  business: 'rgb(57,129,230)',
  technology: 'rgb(196,216,44)',
  sports: 'rgb(242,183,53)',
  any_other: 'rgb(111,117,123)',
  guardian: 'rgb(24,40,72)',
  nytimes: 'rgb(221,221,221)'
}
const badge_txtColor = {
  world: 'white',
  politics: 'white',
  business: 'white',
  technology: 'black',
  sports: 'black',
  any_other: 'white',
  guardian: 'white',
  nytimes: 'black'
}
const sections = ['world', 'politics', 'business', 'technology', 'sports', 'guardian', 'nytimes'];

class NewsCardBadge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {colorSec: this.map_section_2_color(props.section)}
  }
  
  map_section_2_color = sectionId => {
    if (sections.includes(sectionId)) return sectionId;
    else return 'any_other';
  }
  
  render() {
    return (
      <Badge as="span"
             style={{
               backgroundColor: badge_bgColor[this.state.colorSec],
               color: badge_txtColor[this.state.colorSec],
             }}
             className="news-section-badge">
        {this.props.section.toUpperCase()}
      </Badge>
    );
  }
}

NewsCardBadge.propTypes = {
  section: PropTypes.string.isRequired
};

export default NewsCardBadge;