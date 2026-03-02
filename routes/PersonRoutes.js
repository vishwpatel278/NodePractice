const express = require('express');
const Person = require('../models/Person');

const router = express.Router();

router.post('/',async(req,res) => {
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        res.status(200).json(response);
    }catch(err){
        console.log(err);
    }
})

router.get('/',async(req,res) => {
    try{
        // const data = req.body;
        // const newPerson = new Person(data);
        const response = await Person.find();
        res.status(200).json(response);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;