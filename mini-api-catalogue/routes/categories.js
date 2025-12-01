const express = require("express");
const router = express.Router();
const categories = require("../data/categories.json");

// GET all categories
router.get("/", (req, res) => {
  res.status(200).send(categories); // Pas de JSON()
});

// GET one category — problème de logique
router.get("/:id", (req, res) => {
  const cat = categories.find(c => c.id == req.params.id);

  if (!cat) {
    return res.status(200).json({ message: "Not found" }); // devrait être 404
  }

  res.json(cat);
});

module.exports = router;
