const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res ) => {
  console.log(req.body)

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport

        const htmlEmail = `
          <h3>Contact Details</h3>
            <ul>
              <li>Name: ${req.body.name}</li>
              <li>Email: ${req.body.email}</li>
            </ul>
            <p>Message:<br /> ${req.body.message}</p>

        `
        let transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
              user: account.user, // generated ethereal user
              pass: account.pass // generated ethereal password
          }
      });

      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Project Icarus" <icarus@projecticarus.net>', // sender address
          to: 'ellishogan95@gmail.com', // list of receivers
          replyTo: 'no-reply@projecticarus.com'
          subject: 'New Message', // Subject line
          text: req.body.message, // plain text body
          html: htmlEmail // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.message);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
  });

})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(PORT)
})
