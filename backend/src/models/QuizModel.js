const mongoose = require('mongoose');

const Quiz = new mongoose.Schema(
    {
        question: {
            type: String,
            require: true,
            maxlength: 255,
        },
        correct_answer: {
            type: String,
            maxlength: 255,
        },
        incorrect_answers:{
            type: Array,
            maxlength: 255
        },
        topic: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Topics"
        },
    },
    { 
      collection: 'Quiz' ,
      timestamps: true,
    }
);

  module.exports = mongoose.model('Quiz', Quiz);
