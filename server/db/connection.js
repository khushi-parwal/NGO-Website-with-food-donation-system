const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/contact_details')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const entrySchema=new mongoose.Schema({
    name:{String,
    required:true},

    phone:{String,
    required:true},

    mesaage:{String}
});

const collection=new mongoose.model("Collection1",entrySchema)
module.exports=collection

