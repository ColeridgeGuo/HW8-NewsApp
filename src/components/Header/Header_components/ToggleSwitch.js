import React from "react";
import Switch from "react-switch";
import PropTypes from "prop-types";

function ToggleSwitch(props) {
  return (
    <Switch checked={props.toggle}
            onChange={props.handleToggle}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#2480F0"
            offColor="#D5D5D5"
            className="toggle-source"/>
  );
}

ToggleSwitch.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default ToggleSwitch;