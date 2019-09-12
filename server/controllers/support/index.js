var nodemailer = require('nodemailer')
var User = require('../../models/user')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'COP4331smallproject@gmail.com',
    pass: '!@#$%Qwert'
  }
})

exports.test = (req, res) => {
  var address = 'tartuke@gmail.com'
  var msg = { subject: 'Test', text: 'Testing' }
  send(address, msg)
  res.json({ message: 'sent' })
}

exports.isVerified = (req, res) => {
  User.findById(req.user._id, { _id: 0, hashPassword: 0 }, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.json({ is: user.isVerified })
    }
  })
}

exports.sendVerificationEmail = (req, res) => {
  var num = parseInt(Math.random() * 1000000)

  User.updateOne({ _id: req.user._id }, { key: num }, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      User.findById(req.user._id, { _id: 0, hashPassword: 0 }, (err, user) => {
        if (err) {
          res.send(err)
        } else {
          send(user.email, { subject: 'Email Verification', text: `Code: ${num}` })
          res.send({ message: `sent to ${user.email}` })
        }
      })
    }
  })
}

exports.verify = (req, res) => {
  User.updateOne({ _id: req.user._id, key: req.body.code }, { isVerified: true }, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.send({ message: 'Success' })
    }
  })
}

var send = (address, msg) => {
  var mailOptions = {
    from: 'cop4331smallproject@gmail.com',
    to: address,
    subject: msg.subject,
    html: `<h1>Email Verification</h1><p>${msg.text}</p>`
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}
