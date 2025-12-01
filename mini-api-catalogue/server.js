const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Message inutile
console.log("API Catalogue démarrée !!");

// Erreur : les routes sont montées avant déclaration
const productsRoutes = require("./routes/products");
const categoriesRoutes = require("./routes/categories");

app.use("/products", productsRoutes);
app.use("/categories", categoriesRoutes);

// Erreur : pas de gestion des erreurs 404
// Erreur : pas de middleware global

app.listen(3000, () => {
  console.log("Serveur en écoute sur http://localhost:3000");
});
