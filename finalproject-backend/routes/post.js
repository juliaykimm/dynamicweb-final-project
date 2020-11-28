// Query one Blogpost
const express = require("express");
const router = express.Router();
// Require Firebase
const firebase = require("firebase");
// Initialize Firebase Database
const db = firebase.firestore();
// Reference a specific collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => res.send("No id provided"));

router.get("/:id", (req, res) => {
  const queryId = req.params.id;
  blogposts
    .doc(queryId)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        // check if doc exists
        const data = doc.data();
        return res.send(data);
      } else {
        // if no doc exists
        return res.send("no document exists");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
