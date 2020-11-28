// backend application for final
const express = require("express"); // "npm install express" to install express
const app = express();
const port = process.env.PORT || 4000;

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

const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogpost.js");

app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () =>
  console.log(`Exercise Four is running at local host:${port}`)
);
