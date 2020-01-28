import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import 'firebase/storage';
import * as firebase from "firebase/app";
import "./signin.css"
// import firebaseConfig from '../firebaseConfig';w



class Register extends Component {

  state = {
    email: '',
    firstname:'',
    username:'',
    lastname:'',
    password: '',
    error: null,
  };


  addUser = e => {
    let db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
      db.collection("users").doc(`${this.state.email}`).set({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .catch(function(error) {
      console.log('Error getting document:', error);
    });
    this.handleSubmit(e);
    this.setState({
     email: "",
     firstname:"",
     lastname:"",
     username: "",
     password: "",
    });
}

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then((user) => {
       this.props.history.push('/');
     })
     .catch((error) => {
       this.setState({ error: error });
     });
  };

  render() {
    const {  email, firstname, username, lastname, password, error } = this.state;
    return (
      <div>
        <div className="login">
          <h3>Register</h3>
        </div>

        {error ? (
        <div className="login">
          <p>{error.message}</p>
        </div>
        ) : null}

        <div className="login">
          <Form  onSubmit={this.addUser}>
            <Form.Group controlId="formRegisterFirstname">
                <Form.Label>Firstname:</Form.Label> <br />
                <Form.Control type="text" name="firstname" placeholder="Firstname" value={firstname}  onChange={this.updateInput}
            />
            </Form.Group>
            <Form.Group controlId="formRegisterLastname">
                <Form.Label>Lastname:</Form.Label> <br />
                <Form.Control type="text" name="lastname" placeholder="Lastname" value={lastname} onChange={this.updateInput}  />
            </Form.Group>
            <Form.Group controlId="formRegisterEmail">
                <Form.Label>Email:</Form.Label> <br />
                <Form.Control type="email" name="email" placeholder="email" value={email} onChange={this.updateInput} />
            </Form.Group>
            <Form.Group controlId="formRegisterUsername">
                <Form.Label>Username:</Form.Label> <br />
                <Form.Control type="Username" name="username" placeholder="Username" value={username} onChange={this.updateInput}  />
            </Form.Group>
            <Form.Group controlId="formRegisterPassword">
                <Form.Label>Password:</Form.Label> <br />
                <Form.Control type="password" name="password" placeholder="password" value={password} onChange={this.updateInput}   />
            </Form.Group>
            <Button variant="primary"   onClick={this.addUser}>
                Register
            </Button>
            <p>You already have an account ? <br />
              <a href='/login'>Sign in here.</a>
            </p>
          </Form>
        </div>
      </div>
    )
  }

}

export default withRouter(Register);
