const nodemailer = require("nodemailer");

const mailer = (email, message, subject) => {
  const transporter = nodemailer.createTransport({
    host: "server223.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: subject,
    html: `
        <body>
          <div>
            ${message}
          </div>
        </body>
      `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      console.log(info);
    }
  });
};

module.exports = { mailer };
