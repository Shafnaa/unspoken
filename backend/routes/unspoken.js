const router = require("express").Router();
let Unspoken = require("../models/unspoken.model");

router.route("/").get((req, res) => {
  Unspoken.find()
    .then((unspoken) => res.json(unspoken))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  const to = req.body.to;

  const newUnspoken = new Unspoken({ username, message, to });

  newUnspoken
    .save()
    .then(() => res.json("Unspoken added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
