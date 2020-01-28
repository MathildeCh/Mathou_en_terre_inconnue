import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import "./App.css";
import Navigation from './pages/Navigation';
import Header from './pages/Header';
import Footer from './pages/Footer';
import * as firebase from "firebase/app";
// import firebaseConfig from './firebaseConfig';

class App extends Component {
  state = {
    authenticated: false,
  };
  componentDidMount() {
   firebase.auth().onAuthStateChanged((authenticated) => {
     authenticated
       ? this.setState(() => ({
           authenticated: true,
         }))
       : this.setState(() => ({
           authenticated: false,
         }));
   });
  }

  render() {
    return (
      <div>
        <Navigation authenticated={this.state.authenticated} />
        <div class="parallax"></div>

      </div>
   );
  }
}

export default App;
