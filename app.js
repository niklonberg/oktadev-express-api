const express = require("express");
const app = express();
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-mt7f8veddtr1w2ge.eu.auth0.com/.well-known/jwks.json",
  }),
  audience: "http://localhost:5000",
  issuer: "https://dev-mt7f8veddtr1w2ge.eu.auth0.com/",
  algorithms: ["RS256"],
});

app.get("/public", (req, res) => {
  res.json({
    type: "public",
  });
});

app.get("/private", jwtCheck, (req, res) => {
  res.json({
    type: "private",
  });
});

app.listen(5000, () => console.log("Server running"));
