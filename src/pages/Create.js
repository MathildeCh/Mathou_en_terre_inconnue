import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./create.css";

// import * as firebase from "firebase/app";
// import firebaseConfig from '../firebaseConfig';
// import PostList from './PostList';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      body: "",
      header_title: "",
      header_image: "",
      date: "",
      categorie : "",
      street_location : "",
      city_location : ""
    }
  }



  onChangeData = (event, type) => {
      console.log(event.target.value, type);
      switch (type){
        case "article":
          this.state.body = event.target.value;
          break;
        case "title":
          this.state.header_title = event.target.value;
          break;
        case "image":
          this.state.header_image = event.target.value;
          break;
        case "date":
          this.state.date = event.target.value;
          break;
        case "categorie":
          this.state.categorie = event.target.value;
          break;
        case "street_location":
          this.state.street_location = event.target.value;
          break;
        case "city_location":
          this.state.city_location = event.target.value;
          break;
        default:
          this.state.body =  "";
          this.state.header_title = "";
          this.state.header_image= "";
          this.state.date = "";
          this.state.categorie="";
          this.state.street_location="";
          this.state.city_location="";
      }
    }

  onClick = () => {
  const newArticle = {
    body: this.state.body,
    header_title: this.state.header_title,
    header_image: this.state.header_image,
    date: this.state.date,
    categorie : this.state.categorie,
    street_location : this.state.street_location,
    city_location : this.state.city_location
  }
  console.log(newArticle);
  fetch('http://localhost:3035/create',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newArticle)
  })
  .then(response => response.json())
  .then(data => console.log(data));


  }



  render(){
    return (

      <div>
        <div>
          <p>Article title : </p>
          <input type="text"  onChange={(event)=>this.onChangeData(event, "title")}/>

          <p>Title image : </p>
          <input type="text" accept="image/*" onChange={(event)=>this.onChangeData(event, "image")}/>

          <p>Date : </p>
          <input type="date"  onChange={(event)=>this.onChangeData(event, "date")}/>

          <p>Categorie : </p>
          <input type="text"  onChange={(event)=>this.onChangeData(event, "categorie")}/>

          <p>Article : </p>
          <textarea rows="4" cols="50" onChange={(event)=>this.onChangeData(event, "article")}/>

          <p>street : </p>
          <input type="text"  onChange={(event)=>this.onChangeData(event, "street_location")}/>

          <p>city : </p>
          <input type="text"  onChange={(event)=>this.onChangeData(event, "city_location")}/>
        </div>
        <button className="btn" onClick={this.onClick}> Post </button>
      </div>
    );
  }
};


export default Create;
