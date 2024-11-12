const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();

mongoose.connect('mongodb://localhost:27017/anaya')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const donorSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String
    }
})

const collection=new mongoose.model('donor',donorSchema)

data=[{
    name:"khushi",
    phone:"7890645380"},
    
    {
        name:"kavya",
        phone:"7890645331"},

        {
            name:"kanak",
            phone:"7890775331"}
]

collection.insertMany(data)

const port = process.env.PORT || 8000; 


app.listen(port, () => console.log(`Server listening on port ${port}`));


