'use strict';


var mongoose = require('mongoose'),
  Contact = mongoose.model('Contacts'),
  CallList = mongoose.model('CallList');

exports.list_all_contacts = function(req, res) {
  Contact.find({}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.get_call_list = function(req, res) {
  var query = Contact.find({'phone.type': 'home'});
  query.sort({'name.last': 1});
  query.sort({'name.first': 1});
  query.select('name phone');
  query.exec(function(err, list){
    if (err)
      res.send(err);
    res.json(list);
  });
};




exports.create_a_contact = function(req, res) {
  var new_contact = new Contact(req.body);
  new_contact.save(function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.read_a_contact = function(req, res) {
  Contact.findById(req.params.contactId, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.update_a_contact = function(req, res) {
  Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.delete_a_contact = function(req, res) {
  Contact.remove({
    _id: req.params.contactId
  }, function(err, contact) {
    if (err)
      res.send(err);
    res.json({ message: 'Contact successfully deleted' });
  });
};
