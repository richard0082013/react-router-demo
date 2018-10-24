import React, { Component } from "react";
import { Button } from "semantic-ui-react";
class Success extends Component {
  getBack = e => {
    e.preventDefault();
    this.props.goToStarted();
  };
  render() {
    return (
      <div>
        <h1 className="ui centered">Details Successfully Saved</h1>
        <Button onClick={this.getBack}>Back</Button>
      </div>
    );
  }
}

export default Success;
