const firebase = require('firebase')
var config = {
  apiKey: "AIzaSyApxx1IYvZmmV7TdtZUO7QU341YSqv5e4U",
  authDomain: "vuejs-firebase-01-3b3e7.firebaseapp.com",
  databaseURL: "https://vuejs-firebase-01-3b3e7.firebaseio.com",
  projectId: "vuejs-firebase-01-3b3e7",
  storageBucket: "vuejs-firebase-01-3b3e7.appspot.com",
  messagingSenderId: "122647057086"
}

firebase.initializeApp(config)

const db = firebase.database()

module.exports = db
