// Simple Express backend to send chat transcript to agent email
// Save as server.js or in a backend folder

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configure your email transport (use a real SMTP service in production)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'boolop263@gmail.com', // replace with your sending email
    pass: '22#07Dk#01'    // use an app password, not your main password
  }
});

app.post('/send-chat', async (req, res) => {
  const { transcript, to } = req.body;
  if (!transcript || !to) return res.status(400).json({ error: 'Missing transcript or recipient' });

  try {
    await transporter.sendMail({
      from: 'yourgmail@gmail.com', // same as above
      to,
      subject: 'Chatbot Transcript Request',
      text: transcript
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Chatbot backend running on port ${PORT}`);
});
