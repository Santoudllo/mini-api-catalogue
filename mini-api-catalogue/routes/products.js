const express = require("express");
const router = express.Router();
const products = require("../data/products.json");

// GET - retourne tous les produits
router.get("/", (req, res) => {
  res.status(200).json(products);
});

// GET – erreur volontaire : renvoie 201 au lieu de 200
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(500).json({ message: "Produit non trouvé" }); // devrait être 404
  }

  res.status(201).json(product);
});

// POST – aucune validation
router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name, // pas de vérification
    category: req.body.category
  };

  products.push(newProduct);
  res.status(200).json(newProduct); // devrait être 201
});

module.exports = router;
