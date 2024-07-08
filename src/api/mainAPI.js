const express = require('express');

const nodemailer = require('nodemailer');
const path = require('path');
const api = express();

const status = "";



api.post('/sent-mail', (req, res) => {
    res.sendFile(path.join(__dirname, PAGE_STREET_LIGHT));
});




api.post('/send-mail', (req, res) => {
    const { name, email, topic, phone, message } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'runtime.terror.051@gmail.com', 
            pass: 'fqvj ivpm yeqw iisr'  
        }
    });

    // Set up email data
    let mailOptions = {
        from: 'runtime.terror.051@gmail.com', 
        to: 'runtime.terror.051@gmail.com',
        subject: `${topic}`,
        text:`${message} \n \n \n Name: ${name}\n Email: ${email} \n Phone: ${phone}`
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error.message);
            status = "success";
        } else {
            console.log('Email sent successfully:', info.response);
            status = "not_success"
        }

        res.send(status);
    });
});







module.exports = api;