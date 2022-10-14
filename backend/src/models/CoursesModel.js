const mongoose = require('mongoose');

const Courses = new mongoose.Schema(
    {
        name_course: {
            type: String,
            require: true,
            maxlength: 20,
            unique: true,
        },
        image_course: {
            type: String,
            maxlength: 255,
        },
        price_course: {
            type: mongoose.Schema.Types.Decimal128,
        },
        type_course: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, 
            ref:'Users'
        },

    },
    { 
      collection: 'Courses' ,
      timestamps: true,
    }
);

  module.exports = mongoose.model('Courses', Courses);
