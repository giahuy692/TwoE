const mongoose = require('mongoose');

const Topics = new mongoose.Schema(
    {
        name_topic: {
            type: String,
            require: true,
            maxlength: 255,
        },
        image_topic: {
            type: String,
            maxlength: 255,
        },
        course:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Courses"
        },
        score: {
            type:mongoose.Schema.Types.Number,
        }
    },
    { 
      collection: 'Topics' ,
      timestamps: true,
    }
);

  module.exports = mongoose.model('Topics', Topics);
