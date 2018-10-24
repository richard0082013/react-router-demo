import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class UserDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <Form>
        <h1>Enter User Details </h1>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
        </Form.Field>
        <Form.Field>
          <label>Email Address: </label>
          <input
            type="email"
            placeholder="Email Address"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
        </Form.Field>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default UserDetails;
