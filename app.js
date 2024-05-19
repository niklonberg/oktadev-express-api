const express = require("express");
const app = express();
const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

app.get("/public", (req, res) => {
  res.json({
    type: "public",
  });
});

app.get("/private", (req, res) => {
  res.json({
    type: "private",
  });
});

app.listen(5000, () => console.log("Server running"));
