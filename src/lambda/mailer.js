const nodemailer = require('nodemailer')
require("dotenv").config();


exports.handler = function (event, context, callback) {
  const meh = process.env.CONTACT_MAIL
  console.log(meh)
  //   let mail = process.env.HIDDO_MAIL
  //   let mailPassword = process.env.HIDDO_MAIL_PASSWORD
  //   let transporter = nodemailer.createTransport({
  //     service: 'Gmail',
  //     auth: {
  //       user: mail,
  //       pass: mailPassword,
  //     },
  //   })

  //   let newContactMail = {
  //     from: req.body.contact_email,
  //     to: mail,
  //     subject: req.body.contact_subject,
  //     text: `Person: ${req.body.contact_name} ${req.body.contact_surname}
  // Mail: ${req.body.contact_email}
  // User: ${req.body.contact_user}
  // Phone number: ${req.body.contact_number}

  // ${req.body.contact_message}`,
  //   }

  //   transporter.sendMail(newContactMail, function(error, response) {
  //     if (error) {
  //       res.render('contact', {
  //         message: 'There was an error. Try to contact us later.',
  //         err: true,
  //         page: 'contact',
  //       })
  //     } else {
  //       res.render('contact', {
  //         message: 'Message sent! Thank you.',
  //         err: false,
  //         page: 'contact',
  //       })
  //     }
  //   })

  callback(null, {
    statusCode: 500,
    body: "meh",
  })
}
