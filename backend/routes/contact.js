const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');


router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        const newContact = new Contact({
            name,
            email,
            phone
        });

        const savedContact = await newContact.save();
        res.status(201).json(savedContact);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



router.put('/:id', async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            { name, email, phone },
            { new: true }
        );

        res.json(updatedContact);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: 'Contact deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;