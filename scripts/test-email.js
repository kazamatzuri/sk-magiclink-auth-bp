import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

async function testEmail() {
    console.log('Email Configuration:');
    console.log('Host:', process.env.EMAIL_SERVER_HOST);
    console.log('Port:', process.env.EMAIL_SERVER_PORT);
    console.log('User:', process.env.EMAIL_SERVER_USER);
    console.log('From:', process.env.EMAIL_FROM);
    console.log('Password length:', process.env.EMAIL_SERVER_PASSWORD ? process.env.EMAIL_SERVER_PASSWORD.length : 0);

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
        },
        debug: true, // Enable debug output
        logger: true // Log information into the console
    });

    console.log('\nVerifying transport configuration...');
    try {
        const verification = await transporter.verify();
        console.log('Server is ready to take messages:', verification);
    } catch (err) {
        console.error('Transport verification failed:', err);
        return;
    }

    console.log('\nAttempting to send test email...');
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: 'fabian@fabianhaupt.de',
            subject: 'Test Email from App',
            text: 'This is a test email to verify the Nodemailer configuration is working correctly.',
            html: '<p>This is a test email to verify the Nodemailer configuration is working correctly.</p>'
        });

        console.log('\nEmail sent successfully!');
        console.log('Message ID:', info.messageId);
        console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
        console.log('Full response:', info);
    } catch (error) {
        console.error('\nError sending email:');
        console.error(error);
        if (error.response) {
            console.error('Server response:', error.response);
        }
    }
}

testEmail().catch(console.error);