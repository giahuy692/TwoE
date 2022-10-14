const mongoose = require('mongoose');

const Details = new mongoose.Schema(
    {
        name_detail: {
            type: String,
            require: true,
            maxlength: 255,
        },
        definition: {
            type: String,
            maxlength: 255,
        },
        example:{
            type: String,
            maxlength: 255
        },
        pronounce: {
            type: String,
            maxlength:100
        },
        image: {
            type: String,
            maxlength: 250
        },
        topic: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Topics"
        },
    },
    { 
      collection: 'Details' ,
      timestamps: true,
    }
);

  module.exports = mongoose.model('Details', Details);
