const phonebook = require('../phonebook');
// const Contact = require('../models/Contact');

class Contact {
  constructor(name, number) {
      this.name = name;
      this.number = number;
  }
}

module.exports = {
  index: (req, res) => {
    res.render('index', {
    contacts: phonebook.getPhonebook()
  });
},
  addPhonebookPost:(req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    let contact = new Contact(name, number);
    if (name != '' && number != '') {
    phonebook.addContact(contact);
    }
    res.redirect('/');
  }
}