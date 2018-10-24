import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class PersonalDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <Form color="blue">
        <h1 className="ui centered">Enter Personal Details</h1>
        <Form.Field>
          <label>Age</label>
          <input
            placeholder="Age"
            onChange={handleChange("age")}
            defaultValue={values.age}
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            placeholder="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
        </Form.Field>
        <Form.Field>
          <label>Country</label>
          <input
            placeholder="Country"
            onChange={handleChange("country")}
            defaultValue={values.country}
          />
        </Form.Field>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default PersonalDetails;
