// Show all blogposts
const { query } = require("express");
const express = require("express");
const router = express.Router();
// Require firebase
const firebase = require("firebase");
// initialize firestore database
const db = firebase.firestore();
// reference a specific collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
  // inside of this arrow function, we can do anything we want as long as we return at the end
  const blogpostsArray = [];

  blogposts
    .get()
    .then((querySnapshot) => {
      console.log("querySnapshot", querySnapshot);
      querySnapshot.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      // return array
      return res.send(blogpostsArray);
    })
    .catch(function (e) {
      console.warn("error", e);
      return res.send(error);
    });
});

module.exports = router;
