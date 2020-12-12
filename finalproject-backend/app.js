const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const firebaseConfig = {
  apiKey: "AIzaSyBvpgDsICUR1NgzzdaWDZqd--19E6PpUe4",
  authDomain: "final-project2-fb01f.firebaseapp.com",
  projectId: "final-project2-fb01f",
  storageBucket: "final-project2-fb01f.appspot.com",
  messagingSenderId: "368055956185",
  appId: "1:368055956185:web:d92b2e375e2554b11844c8",
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

app.listen(port, () => console.log(`Backend is running at port:${port}`));
