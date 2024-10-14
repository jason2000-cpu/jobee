const nodemailer = require('nodemailer');

// Function to send email
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,    // Gmail SMTP host
    port: process.env.EMAIL_PORT,    // Port (587 for TLS)
    secure: false,                   // Use TLS (false for SSL)
    auth: {
      user: process.env.EMAIL_USERNAME,     // Gmail address from .env
      pass: process.env.EMAIL_APP_PASSWORD, // Gmail App Password from .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,  // Sender's name and email from .env
    to: options.email,             // Recipient email
    subject: options.subject,      // Email subject
    text: options.message,         // Email body (plain text)
    // html: options.html,         // Optional: Use for HTML emails
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

