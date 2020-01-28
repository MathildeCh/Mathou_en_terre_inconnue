import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import Register from './Register';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import SignOut from './SignOut';
import Create from './Create';
import PostList from './PostList';
import Post from './Post';
import Page from './Page';
import Header from './Header';
import Menu from './Menu';
import Varanasi from './Varanasi';
import Footer from './Footer';
import "./navigation.css";
//
// <Container>
// <Row>
// <Col md={4}>md=4</Col>
// <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
// </Row>
// <Row>
// <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
// <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
// </Row>
// <Row>
// <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
// </Row>
// </Container>

class Navigation extends Component {
 render() {
   return (
      <Router>
        <Container>
        <nav>
          <Row>
            <Col xs={1} md={3}>
            </Col>
            <Col xs={10} md={6}>
                <NavLink to="/"><Menu /></NavLink>
            </Col>
            <Col xs={1} md={3}>
              {this.props.authenticated ? (
                <span>
                  <NavLink className="profile" to="/dashboard">Profile</NavLink>
                  <NavLink className="create" to="/create">Create</NavLink>
                  <SignOut />
                </span>
              ) : (
                <span>
                  <NavLink className="login" to="/login">Login</NavLink>
                  <NavLink className="register" to="/register">Register</NavLink>
                </span>
              )}
            </Col>
          </Row>
          </nav>
          <main>
          <Row>
            <Col xs={11} md={8}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route authenticated={this.props.authenticated} path="/login" component={SignIn} />
                  <Route path="/register" component={Register} />
                  <Route path="/create" component={Create} />
                  <Route path="/Varanasi" component={Varanasi} />
                   <Route path="/page" component={Page} />
                  <Route path="/post" component={Post} />
                  <ProtectedRoute authenticated={this.props.authenticated} path="/dashboard" component={Dashboard} />
                </Switch>
            </Col>
          </Row>
          </main>
          <div className="color">
            <div className="tu">
              <p>Toi aussi tu m'intéresses!</p>
              <p>Connectes-toi pour que nous puissions échanger</p>
            </div>
          </div>
          <Footer />
        </Container>
      </Router>
    );
  }
}
export default Navigation;
