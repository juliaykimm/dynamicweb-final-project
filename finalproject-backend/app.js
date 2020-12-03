// Backend Application for Final Project
const express = require("express");
const app = express();

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

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createPost.js");

app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);
