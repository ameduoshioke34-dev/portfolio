// index.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// POST endpoint to receive contact form submissions
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Gmail transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'oshioke44@gmail.com',  // your email
        pass: 'dhvvpvdyipebyycy'     // Gmail App Password
      }
    });

    let mailOptions = {
      from: email,
      to: 'oshioke44@gmail.com',     // your receiving email
      subject: `New message from ${name}`,
      text: message
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent from ${email}`);
    res.status(200).send('Message sent successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to send message.');
  }
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));