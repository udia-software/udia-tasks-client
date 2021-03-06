import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";

import AppMessages from "./AppMessages/AppMessages";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";
import Settings from "./Auth/Settings";
import SignIn from "./Auth/SignIn";
import SignOut from "./Auth/SignOut";
import SignUp from "./Auth/SignUp";
import VerifyEmail from "./Auth/VerifyEmail";
import CreateGoal from "./Goals/CreateGoal";
import UpdateGoal from "./Goals/UpdateGoal";
import ViewGoal from "./Goals/ViewGoal";
import ViewGoals from "./Goals/ViewGoals";
import About from "./Static/About";
import Footer from "./Static/Footer";
import Home from "./Static/Home";
import NoMatch from "./Static/NoMatch";
import CreateTask from "./Tasks/CreateTask";
import UpdateTask from "./Tasks/UpdateTask";
import ViewTask from "./Tasks/ViewTask";
import ViewTasks from "./Tasks/ViewTasks";
import Navbar from "./Navbar";

const LogPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;
};

class App extends Component {
  render() {
    const siteContentStyle = {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column"
    };
    return (
      <div style={siteContentStyle}>
        <LogPageView />
        <Navbar />
        <div style={{ flex: "1" }}>
          <AppMessages />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/auth/signout" component={SignOut} />
            <Route exact path="/auth/signin" component={SignIn} />
            <Route exact path="/auth/signup" component={SignUp} />
            <Route
              exact
              path="/auth/forgot-password"
              component={ForgotPassword}
            />
            <Route
              exact
              path="/auth/reset-password/:uid/:token"
              component={ResetPassword}
            />
            <Route
              exact
              path="/auth/verify-email/:key"
              component={VerifyEmail}
            />
            <Route exact path="/auth/settings" component={Settings} />
            <Route exact path="/goals" component={ViewGoals} />
            <Route exact path="/goals/create" component={CreateGoal} />
            <Route exact path="/goals/:id" component={ViewGoal} />
            <Route exact path="/goals/:id/update" component={UpdateGoal} />
            <Route exact path="/tasks" component={ViewTasks} />
            <Route exact path="/tasks/create" component={CreateTask} />
            <Route exact path="/tasks/:id" component={ViewTask} />
            <Route exact path="/tasks/:id/update" component={UpdateTask} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
