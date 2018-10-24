import React, { Component } from "react";
import UserDetails from "./userDetails";
import PersonalDetails from "./personalDetails";
import Confirmation from "./confirmation";
import Success from "./success";
import FormLanding from "./formLanding";

class MainForm extends Component {
  state = {
    step: 0,
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    city: "",
    country: ""
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  goToStarted = () => {
    this.setState({ step: 0 });
  };
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, age, city, country } = this.state;
    const values = { firstName, lastName, email, age, city, country };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <PersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );

      case 4:
        return <Success goToStarted={this.goToStarted} />;

      default:
        return <FormLanding nextStep={this.nextStep} values={values} />;
    }
  }
}

export default MainForm;
