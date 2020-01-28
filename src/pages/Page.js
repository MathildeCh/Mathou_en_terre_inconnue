import React, { Component } from 'react'
import { Link } from "react-router-dom";

import * as firebase from "firebase/app";
import firebaseConfig from '../firebaseConfig';

import PostList from './PostList';
import Post from './PostList';
import Home from './Home';


// constructor() {
//   super();
//   this.state = {
//     body: "",
//     header_title: "",
//     header_image: "",
//     date: "",
//     categorie : "",
//     street_location : "",
//     city_location : ""
//   }
// }
//
// getPost = () => {
  // const getData = {
  //   body: this.state.body,
  //   header_title: this.state.header_title,
  //   header_image: this.state.header_image,
  //   date: this.state.date,
  //   categorie : this.state.categorie,
  //   street_location : this.state.street_location,
  //   city_location : this.state.city_location
  // }
//   fetch('http://localhost:3035/post',{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(getData)
//   })
//   .then(response => response.json())
//   .then(data => this.setState(data));
// }
class Page extends Component{
  constructor(){
    super();
    this.state={
          postList:[],
          // page:'',
     }
  }
  async componentDidMount(){
    const getData = {
      body: this.state.body,
      header_title: this.state.header_title,
      header_image: this.state.header_image,
      date: this.state.date,
      categorie : this.state.categorie,
      street_location : this.state.street_location,
      city_location : this.state.city_location
    }
    const response = await fetch('http://localhost:3035/post',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getData)
    })
    const postList = await response.json();
    await this.setState({postList:postList});
  }


  render(){
    const{ postList } =this.state;
    console.log(postList);

    return ( <PostList posts= {postList} /> )

  }
}

export default Page;
