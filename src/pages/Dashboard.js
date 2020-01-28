import React from 'react';
import * as firebase from "firebase/app";


const Dashboard = () => {
  var user = firebase.auth().currentUser;
var db = firebase.firestore();
var docRef = db.collection('users').doc(user.email);
docRef.get().then(function(doc) {
  if (doc.exists) {
    const data = doc.data()
    user.updateProfile({
      displayName: `${data.firstname} ${data.lastname}`,
    }).then(function() {
    }).catch(function(error) {
    });
  } else {
  }
})

    return(
     <div>
        <p>Welcome back, {user.displayName} !</p>
        <p>You can now leave a comment.</p>
        <div className="space"></div>
     </div>
    );
};

export default Dashboard;
