const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')

const nodemailer = require('nodemailer')

const transport = {
  service: 'AOL',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take message')
  }
})

router.post(
  '/',
  asyncHandler(async (req, res, next) => {
    const { name, email, phone, typeOfSession, time, appointmentType, value } =
      req.body

    const content = `Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Type of Session: ${typeOfSession}\n Date: ${value} \n Time for Session: ${time} \n Appointment Type: ${appointmentType}`

    const mail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIPT_USER,
      subject: 'New Message from Contact form',
      text: content,
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({ msg: 'fail' })
      } else {
        res.json({ msg: 'success' })
      }
    })
  })
)

module.exports = router
