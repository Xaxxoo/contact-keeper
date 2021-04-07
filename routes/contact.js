const express = require('express');
const router = express.Router();

// @Route GET api/contacts
// @desc Get all contacts
//@access Private
router.post('/', (req, res) => {
    res.send(' a User');
});

// @Route POST api/contacts
// @desc add new contact
//@access Private
router.post('/', (req, res) => {
    res.send('Add a new contact');
});

// @Route PUT api/contacts
// @desc Edit a contact
//@access Private
router.put('/:id', (req, res) => {
    res.send('Edit Contact');
});

// @Route DELETE api/contacts
// @desc delete a contact
//@access Private
router.delete('/:id', (req, res) => {
    res.send('Delete a contact');
});

module.exports = router;
