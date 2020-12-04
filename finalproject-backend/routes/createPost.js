const express = require("express");
const router = express.Router();
// Require Firebase
const firebase = require("firebase");
// Initialize Firebase Database
const db = firebase.firestore();
// Reference a specific collection
const newPost = db.collection("newPost");

const form = `
<form action="/create/submit">
    <input type="text" name="recipeName" placeholder="Recipe name"/>
    <input type="text" name="recipeAuthor" placeholder="Author"/>
    <input type="text" name="ingredients" placeholder="Ingredients"/>
    <input type="text" name="steps" placeholder="Steps"/>
    <button type="submit">Submit Post</button>
</form>
`;

router.get("/", (req, res) => res.send(form));

router.get("/submit", (req, res) => {
  const queryParams = req.query;
  const idFromTitle = queryParams.recipeName.replace(/\s+/g, "-").toLowerCase();

  newPost
    .doc(idFromTitle)
    .set(queryParams)
    .then(function (doc) {
      res.send("Successful Submission");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
