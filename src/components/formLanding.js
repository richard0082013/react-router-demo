import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class FormLanding extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <Button onClick={this.saveAndContinue}>Let's get it started! </Button>
    );
  }
}

export default FormLanding;
