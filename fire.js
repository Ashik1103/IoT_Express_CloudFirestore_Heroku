var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {
    apiKey: "AIzaSyDf8u_VHAswod8ioK7wqPdNvT_-BM4Y7Jo",
    authDomain: "roverbay-b057d.firebaseapp.com",
    databaseURL: "https://roverbay-b057d-default-rtdb.firebaseio.com",
    projectId: "roverbay-b057d",
    storageBucket: "roverbay-b057d.appspot.com",
    messagingSenderId: "453827648901",
    appId: "1:453827648901:web:183370000f0f6218cef8ec",
    measurementId: "G-7XZ8LPK7HH"
};
const fire = firebase.initializeApp(config);
module.exports = fire;

