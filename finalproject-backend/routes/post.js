// Query one Blogpost
const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
const newPost = db.collection("newPost");

router.get("/:id", (req, res) => {
  const queryId = req.params.id;
  newPost
    .doc(queryId)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        const data = doc.data();
        return res.send(data);
      } else {
        return res.send("no document exists");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
