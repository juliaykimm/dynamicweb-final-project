// Show all blogposts
const { query } = require("express");
const express = require("express");
const router = express.Router();

const firebase = require("firebase");
// initialize firestore database
const db = firebase.firestore();
// reference a specific collection
const newPost = db.collection("newPost");

router.get("/", (req, res) => {
  // inside of this arrow function, we can do anything we want as long as we return at the end
  const newPostArray = [];

  newPost
    .get()
    .then((querySnapshot) => {
      console.log("querySnapshot", querySnapshot);
      querySnapshot.forEach((doc) => {
        newPostArray.push(doc.data());
      });
      // return array
      return res.send(newPostArray);
    })
    .catch(function (e) {
      console.warn("error", e);
      return res.send(error);
    });
});

module.exports = router;
