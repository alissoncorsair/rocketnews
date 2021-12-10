const express = require('express')
const router = express.Router()
const Email = require('../models/email.js')


router.get('/', async (req, res) => {
    try {
    const emails = await Email.find()
    res.json(emails)
    } catch (err) {
        res.json({message: err})
    }

})

router.post('/', async (req, res) => {
    const email = new Email({
        email: req.body.email
    })
    try {
        const savedEmail = await email.save()
        res.json(savedEmail)
    } catch (err) {
        res.json({message: err})
    }
})

router.get('/:emailId', async (req, res) => {
    try {
        const email = await Email.findById(req.params.emailId)
        res.json(email)
    } catch (err) {
        res.json({message: err})
    }
})

router.delete('/:emailId', async (req, res) => {
    try {
        const removedEmail = await Email.findByIdAndDelete(req.params.emailId)
        res.json(removedEmail)
    } catch (err) {
        res.json({message: err})
    }
})

router.patch('/:emailId', async (req, res) => {
    try {
        const updatedEmail = await Email.findByIdAndUpdate(req.params.emailId, req.body)
        res.json(updatedEmail)
    } catch (err) {
        res.json({message: err})
    }
})



module.exports = router;