const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pranavdesai5678@gmail.com',
        subject: 'Thanks for joining in.',
        text: `Welcome to the app, ${name}, let me know how you get along with this app`

    })
}

const sendDeleteEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pranavdesai5678@gmail.com',
        subject: 'We are sorry to see you go',
        text: `We are sorry to see you go ${name}`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}