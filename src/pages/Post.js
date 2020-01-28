import React, { Component } from 'react';
// import { Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media'

import * as firebase from "firebase/app";
import firebaseConfig from '../firebaseConfig';

const Post = ({post}) => {

  const { body, header_title, header_image, date, categorie_id, street_location, city_location } = post;

  return (

    <Col xs={6}>
      <Card>
          <Card.Title>
            <img src={header_image} alt="" />
            <p>{categorie_id}</p> <br />
            <h2>{header_title}</h2>
          </Card.Title>
          <Card.Body className='card'>
            <p>{body}</p> <br />
            <a href={header_title}>Lire plus</a>
        </Card.Body>
      </Card>
    </Col>
  );
}



export default Post;
