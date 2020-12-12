import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

import "./App.css";

import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";

import Header from "./components/Header";
import HomePage from "./containers/HomePage";
import CreatePost from "./containers/CreatePost";
import Recipe from "./containers/Recipe";

const firebaseConfig = {
  apiKey: "AIzaSyBvpgDsICUR1NgzzdaWDZqd--19E6PpUe4",
  authDomain: "final-project2-fb01f.firebaseapp.com",
  projectId: "final-project2-fb01f",
  storageBucket: "final-project2-fb01f.appspot.com",
  messagingSenderId: "368055956185",
  appId: "1:368055956185:web:d92b2e375e2554b11844c8",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInformation, setUserInformation] = useState({});
  const [homeInformation, sethomeInformation] = useState({});
  const [postInformation, setpostInformation] = useState({});
  const [recipeInformation, setrecipeInformation] = useState({});

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLoggedIn(true);
        setUserInformation(user);
        sethomeInformation(user);
        setpostInformation(user);
        setrecipeInformation(user);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  function LoginFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        console.warn("LOGIN RESPONSE", email, response);
      })
      .catch(function (error) {
        console.warn("LOGIN ERROR", error);
      });
  }
  function LogoutFunction(e) {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false);
        setUserInformation({});
      })
      .catch(function (error) {
        console.warn("LOGOUT ERROR", error);
      });
  }

  function CreateAccountFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.warn("VALID ACC CREATED", email, response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.warn("ACC CREATION FAILED", error);
      });
  }

  if (loading) return null;

  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogoutFunction={LogoutFunction} />
      <Router>
        <Route exact path="/login">
          {!loggedIn ? (
            <Login LoginFunction={LoginFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/create-account">
          {!loggedIn ? (
            <CreateAccount CreateAccountFunction={CreateAccountFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/">
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <UserProfile userInformation={userInformation} />
          )}
        </Route>
        <Route exact path="/home">
          {!loggedIn ? (
            <Redirect to="/" />
          ) : (
            <HomePage homeInformation={homeInformation} />
          )}
        </Route>
        <Route exact path="/create-post">
          {!loggedIn ? (
            <Redirect to="/" />
          ) : (
            <CreatePost postInformation={postInformation} />
          )}
        </Route>
        <Route exact path="/recipe">
          {!loggedIn ? (
            <Redirect to="/" />
          ) : (
            <Recipe recipeInformation={recipeInformation} />
          )}
        </Route>
      </Router>
    </div>
  );
}

export default App;
