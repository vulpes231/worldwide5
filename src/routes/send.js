const express = require("express");
const { processSubmission } = require("../handlers/send");
const router = express.Router();

router.route("/").post(processSubmission);

module.exports = router;
