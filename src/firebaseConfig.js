import firebase from 'firebase'
require('firebase/firestore')

const config = {
  apiKey: "AIzaSyDWQkdtts5rUrzPyUBl52fPIGDnIv9mdFA",
  authDomain: "myblog2-a02d2.firebaseapp.com",
  databaseURL: "https://myblog2-a02d2.firebaseio.com",
  projectId: "myblog2-a02d2",
  storageBucket: "myblog2-a02d2.appspot.com",
  messagingSenderId: "471066612186",
  appId: "1:471066612186:web:eac7a05bf1c116059870e3",
  measurementId: "G-13GWY24EGS"
};

firebase.initializeApp(config)


export default firebase;




// import {
//   API,
//   AUTH_DOMAIN,
//   DATABASE_URL,
//   PROJECT_ID,
//   MESSAGE_SENDER_ID,
//   APP_ID,
//   STORAGE_BUCKET
// } from ‘react-native-dotenv’
// const firebaseConfig = {
//   apiKey: API,
//   authDomain: AUTH_DOMAIN,
//   databaseURL: DATABASE_URL,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGE_SENDER_ID,
//   appId: APP_ID
// };
