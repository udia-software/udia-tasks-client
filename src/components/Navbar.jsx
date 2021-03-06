import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

import { retrieveSelfUserRequest } from "../modules/auth/sagas.actions";

class Navbar extends Component {
  componentWillMount() {
    this.props.dispatch(retrieveSelfUserRequest());
  }

  render() {
    const { userToken, user } = this.props.auth;
    return <NavbarView userToken={userToken} user={user} />;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

const NavbarView = ({ userToken, user }) => (
  <Menu>
    <Menu.Item as={Link} to="/">
      UDIA
    </Menu.Item>
    {!userToken &&
      <Menu.Menu position="left">
        <Menu.Item as={Link} to="/about">
          About
        </Menu.Item>
      </Menu.Menu>}
    {userToken &&
      <Menu.Menu position="left">
        <Menu.Item as={Link} to="/tasks">
          Tasks
        </Menu.Item>
        <Menu.Item as={Link} to="/goals">
          Goals
        </Menu.Item>
      </Menu.Menu>}
    {userToken &&
      <Menu.Menu position="right">
        <Dropdown item text="Create">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/goals/create">
              Goal
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/tasks/create">
              Task
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text={user.username || "..."}>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/auth/settings">
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to="/auth/signout">
              Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>}
    {!userToken &&
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/auth/signin">
          Sign In
        </Menu.Item>
        <Menu.Item as={Link} to="/auth/signup">
          Sign Up
        </Menu.Item>
      </Menu.Menu>}
  </Menu>
);

export default connect(mapStateToProps)(Navbar);
