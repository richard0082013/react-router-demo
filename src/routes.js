import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Feed from "./components/articleItem";
import Card from "./components/myFirstCompoent";
import { Container } from "semantic-ui-react";
import MainForm from "./components/mainForm";
import Users from "./components/users";

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/feed" component={Feed} />
      <Route exact path="/card" component={Card} />
      <Route exact path="/users" component={Users} />
      <Route
        exact
        path="/mainform"
        render={() => (
          <Container textAlign="center">
            <MainForm />
          </Container>
        )}
      />
    </Switch>
  </App>
);
export default Routes;
