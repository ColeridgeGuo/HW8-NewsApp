import React from "react";
import Switch from "react-switch";
import PropTypes from "prop-types";

function ToggleSwitch(props) {
  return (
    // TODO: make width+height responsive
    <Switch checked={props.checked}
            onChange={props.handleToggle}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#2480F0"
            offColor="#D5D5D5"
            height={27}
            width={50}
            className="toggle-source"/>
  );
}

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default ToggleSwitch;