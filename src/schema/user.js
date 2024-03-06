const mongoose = require('mongoose')
const userSchema= new mongoose.Schema({
    username: { type: mongoose.SchemaTypes.String, required: true },
    password: { type: mongoose.SchemaType.String,  unique: true, },
    email: { type: mongoose.SchemaTypes.String, required: true },
})