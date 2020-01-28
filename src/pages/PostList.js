import React from 'react';
// import App from "./App";
import Row from 'react-bootstrap/Row';

import Post from "./Post";



const PostList = ({ posts }) => {
  return (
    <Row>
    {
      posts.map(item => {
        return <Post post={item}/>
      })
    }
    </Row>
  );
}

export default PostList;
