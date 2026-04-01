const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.BREVO_SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: "a6c8c1001@smtp-brevo.com",  
        pass: process.env.BREVO_SMTP_KEY
    }
});


async function sendVerificationEmail(fullName, email, token) {
    const mailOptions = {
        from: `"Internsity" <${process.env.BREVO_SMTP_USER}>`,
        to: 'ajeetbca2022@gmail.com',
        subject: "Verify Email",
        text: "Test email"
    };
    

    return transporter.sendMail(mailOptions);
}

sendVerificationEmail().then(info => {
    console.log('Email sent: ' + info.response);
})
    .catch(error => {
        console.error('Error sending email: ', error);
    });