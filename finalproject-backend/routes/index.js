// Show all blogposts
const { query } = require("express");
const express = require("express");
const router = express.Router();

const firebase = require("firebase");
const db = firebase.firestore();
const newPost = db.collection("newPost");

router.get("/", (req, res) => {
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
