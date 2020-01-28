import React from 'react';
import Button from 'react-bootstrap/Button';

import firebase from 'firebase';

const logOutUser = () => {
  firebase.auth().signOut();
};
const LogOut = () => {
  return(
    <div >
      <a className="logout" onClick={logOutUser}> Log out </a>
    </div>
  )
}

export default LogOut;
