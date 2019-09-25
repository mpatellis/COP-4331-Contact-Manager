var Contact = require('../../models/contact')

exports.addNew = (req, res) => { //  :)
  req.body.owner = req.user._id
  const newContact = new Contact(req.body)

  newContact.save((err, contact) => {
    if (err) {
      res.send(err)
    } else {
      res.json(contact)
    }
  })
}

exports.search = (req, res) => { // :)
  console.log(req.body)
  //if (!req.body.search) return res.status(401).json({ message: 'Must include search param' })
  console.log(req.body.search)
  var searchParams = req.body.search.split(' ')
  searchParams[0] = searchParams[0] || ''
  searchParams[1] = searchParams[1] || ''
  console.log(searchParams)
  console.log(req.user._id)
  Contact.find({
    $and: [
      { owner:  req.user._id}, // must have corect owner
      {
        $or: [
          {
            $and: [
              { lastName: { $regex: searchParams[1], $options: 'i' } },
              { firstName: { $regex: searchParams[0], $options: 'i' } }
            ]
          },
          {
            $and: [
              { lastName: { $regex: searchParams[0], $options: 'i' } },
              { firstName: { $regex: searchParams[1], $options: 'i' } }
            ]
          }
        ]
      }
    ]
  }, {  },
  (err, contact) => {
    if (err) {
      res.send(err)
    } else {
      res.json(contact)
    }
  })
}

exports.getAll = (req, res) => { // :)
  Contact.find({ owner: req.user._id }, { owner: 0 }, (err, contact) => {
    if (err) {
      res.send(err)
    } else {
      res.json(contact)
    }
  })
}

exports.getById = (req, res) => { // :)
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err)
    } else if (!contact){
      res.json({})
    } else if (contact.owner == req.user._id) {
      res.json(contact)
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' })
    }
  })
}

exports.updateById = (req, res) => { // :)
  Contact.updateOne({ owner: req.user._id, _id: req.params.contactId }, req.body, (err, contact) => {
    if (err) {
      res.send(err)
    } else {
      res.json(contact)
    }
  })
}

exports.deleteById = (req, res) => { // :)
  Contact.deleteOne({ owner: req.user._id, _id: req.params.contactId }, (err, contact) => {
    if (err) {
      res.send(err)
    } else {
      res.json(contact)
    }
  })
}
