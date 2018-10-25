import React, { Component } from "react";
import { List, Container, Dimmer, Loader } from "semantic-ui-react";
import axios from "axios";

class Users extends Component {
  state = {
    users: [],
    page: 0,
    loading: false,
    prevY: 0
  };
  componentDidMount() {
    this.getUsers(this.state.page);
    var options = {
      root: null,
      threshold: 0.5
    };
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }
  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const lastUser = this.state.users[this.state.users.length - 1];
      const curPage = lastUser.id;
      this.getUsers(curPage);
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }
  getUsers(page) {
    this.setState({
      loading: true
    });
    axios
      .get(`https://api.github.com/users?since=${page}&per_page=100`)
      .then(res => {
        this.setState({
          users: [...this.state.users, ...res.data],
          loading: false
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const loadingCSS = {
      height: "100px",
      margin: "30px"
    };
    return (
      <Container textAlign="center">
        <List>
          {this.state.users.map(user => (
            <List.Item key={user.id}>{user.login}</List.Item>
          ))}
        </List>

        <div
          style={loadingCSS}
          ref={loadingRef => (this.loadingRef = loadingRef)}
        >
          {this.state.loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : null}
        </div>
      </Container>
    );
  }
}

export default Users;
