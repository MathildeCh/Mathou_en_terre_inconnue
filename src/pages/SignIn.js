import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withRouter } from 'react-router-dom';
import 'firebase/storage';
import * as firebase from "firebase/app";
// import firebaseConfig from '../firebaseConfig';
import "./signin.css"

class SignIn extends Component {

  state = {
    email: "",
    password:"",
    error : null
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getUser = e => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .then((user) => {
       this.props.history.push('/');
     })
     .catch((error) => {
       this.setState({ error: error });
     })
    let db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("users").where("email", "==", this.state.email).get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    })

  }

  render() {

    const { email, password, error } = this.state;

    return(
      <div className="root">
        <div className="login">
          <h3>Login</h3>
        </div>

        {error ? (
        <div className="login">
          <p>{error.message}</p>
        </div>
        ) : null}

        <div className="login">
          <Form  onSubmit={this.getUser}>
            <Form.Group controlId="formRegisterUsername">
                <Form.Label>email:</Form.Label> <br />
                <Form.Control type="email" name="email" placeholder="mémé@gmail.com" value={email}  onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formRegisterPassword">
                <Form.Label>Password:</Form.Label> <br />
                <Form.Control type="password" name="password" placeholder="password" value={password}  onChange={this.handleInputChange}  />
            </Form.Group>
            <button className="btn"   onClick={this.getUser}>
                Login
            </button>
          </Form>
          <a href="/register">Register here</a>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn);
