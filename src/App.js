import React, {useEffect, useState} from 'react';
import {Redirect, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import * as firebase from "firebase/app";
import "firebase/auth";

import Login from './pages/Login/index'
import UserProfile from './pages/UserProfile/index'
import Signup from './pages/Signup/index'
import Header from './components/Header/index'

var firebaseConfig = {
  apiKey: "AIzaSyB_Vsq1No-ITYO-kNbfJQ9sf4HocItmC3o",
  authDomain: "dynamic-web-exercise-5.firebaseapp.com",
  databaseURL: "https://dynamic-web-exercise-5.firebaseio.com",
  projectId: "dynamic-web-exercise-5",
  storageBucket: "dynamic-web-exercise-5.appspot.com",
  messagingSenderId: "671662178723",
  appId: "1:671662178723:web:ea6897d792de13eccb5a16",
  measurementId: "G-6GDZMB986V"
};

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    //initialize firebase
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }  

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(error) {
        console.log('error', error);
      });
  },[firebaseConfig])

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(function(user){
        if (user) {
          setLoggedIn(true);
        }else{
          //No user is signed in
          setLoggedIn(false);
        }
      });
  },[])



  function signupFunction (e) {
    e.preventDefault();

    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error', error);
      });
  }

  function loginFunction (e) {
    e.preventDefault();

    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginEmail.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error', error);
    });
  }

  function logoutFunction (e) {
    firebase
      .auth()
      .signOut()
      .then(function() {
        setLoggedIn(false);
      })
      .catch(function(error) {
        console.log('error', error);
      });
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} logoutFunction={logoutFunction} />

      <Router>
        <Route exact path="/" > 
            {loggedIn ? <UserProfile /> : <Redirect to ="/login" /> }
        </Route>
        <Route exact path="/signup" > 
            {loggedIn ? <Redirect to ="/" /> : < Signup signupFunction={signupFunction}/> }
        </Route>
        <Route exact path="/login" > 
            {loggedIn ? <Redirect to ="/" /> : < Login loginFunction={loginFunction} /> }
        </Route>
      </Router>
    </div>
  );
}

export default App;
