import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

import "./App.css";

import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";

import Header from "./components/Header";
import HomePage from "./containers/HomePage";

const firebaseConfig = {
  apiKey: "AIzaSyCLz_TlYlo-Zs9hcVzVbFt52PJrsaNfUMw",
  authDomain: "final-project-7bf99.firebaseapp.com",
  databaseURL: "https://final-project-7bf99.firebaseio.com",
  projectId: "final-project-7bf99",
  storageBucket: "final-project-7bf99.appspot.com",
  messagingSenderId: "658834115173",
  appId: "1:658834115173:web:81ca21cbdebb9cfbf2948c",
  measurementId: "G-3ZKJ2EJFMK",
};

function App() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000`)
      .then(function (response) {
        const data = response.data;
        setAPIData(data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log({ APIData });

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInformation, setUserInformation] = useState({});
  const [homeInformation, sethomeInformation] = useState({});

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // user is logged in
        setLoggedIn(true);
        setUserInformation(user);
        sethomeInformation(user);
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
        console.log("LOGIN RESPONSE", email, response);
      })
      .catch(function (error) {
        console.log("LOGIN ERROR", error);
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
        console.log("LOGOUT ERROR", error);
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
        console.log("VALID ACC CREATED", email, response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("ACC CREATION FAILED", error);
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
      </Router>
    </div>
  );
}

export default App;
