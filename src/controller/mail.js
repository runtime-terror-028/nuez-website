const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));


// Handle form submission
app.post('/send-email', (req, res) => {
    const { userEmail, subject, message } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'runtime.terror.051@gmail.com', // replace with your email
            pass: 'fqvj ivpm yeqw iisr'   // replace with your email password
        }
    });

    // Set up email data
    let mailOptions = {
        from: 'runtime.terror.051@gmail.com', // replace with your email
        to: 'runtime.terror.051@gmail.com',
        subject: `Message from ${userEmail}: ${subject}`, // subject includes user's email and subject
        text: `Message from ${userEmail}:\n\n${message}`, // message includes user's email and message
        replyTo: userEmail // sets the Reply-To header to the user's email address
    };


    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.message);
        }
        res.send('Email sent: ' + info.response);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
