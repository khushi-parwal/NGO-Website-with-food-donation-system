const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();

mongoose.connect('mongodb://localhost:27017/anaya')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const contactSchema=mongoose.Schema({

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

const collection=new mongoose.model('contact',contactSchema)

data=[{
    name:"khushi",
    phone:"7890645380",
    message:"good work"},
    
    {
        name:"kavya",
        phone:"7890645331"}
]

collection.insertMany(data)

const port = process.env.PORT || 8000; 

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());

// app.post('/api/contact', (req, res) => {
//     const { name, phone, message } = req.body;

//     console.log('Received form submission:', { name, phone, message });
//     res.json({ message: 'Form submission successful!' });
// });

app.listen(port, () => console.log(`Server listening on port ${port}`));


