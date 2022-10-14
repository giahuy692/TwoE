const mongoose = require('mongoose');

const Users = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            minlength: 5,
            maxlength: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 150,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        admin: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            minlength: 6,
            maxlength: 255,
        },
        avt:{
            type: String,
            default: 'user'
        },
        age:{
            type: String,
        }

    }, 
    { 
      collection: 'Users' ,
      timestamps: true,
    }
);

  module.exports = mongoose.model('Users', Users);
