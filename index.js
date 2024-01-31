const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { corsOptions } = require("./src/configs/cors-option");

const app = express();
const PORT = process.env.PORT || 2500;

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/connect", require("./src/routes/send"));

app;

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
