// src/configs/cors-option.js
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://arcon.kryptwallet.com",
  "https://markusaujaiay.com",
  "*",
];

// const allowedOrigins = require("./allowed-origins");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("You are not allowed on this server"));
    }
  },
  optionsSuccessStatus: 200,
  exposedHeaders: ["Access-Control-Allow-Origin"],
};

module.exports = { corsOptions };
