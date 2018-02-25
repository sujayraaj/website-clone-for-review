import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import styles from "./App.css";
import AddQuestion from "./Components/AddQuestion";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={`container ${styles.container || ""}`}>
          <Header />
          <Switch>
            <Route exact path="/add-question" component={AddQuestion} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stateProp: state
});

const mapDispatchToProps = dispatch => ({
  action: () => {
    dispatch({ type: "ACTION3" });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
