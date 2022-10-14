
const Course = require("../models/CoursesModel");

class courseControllers {
    GetAllCourse (req, res, next) {
        try {
            
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async AddCourse (req, res, next){
        try {
            const newCourse = await new Course ({
                name_course: req.body.name_course,
                image_course: req.body.avt,
                price_course: req.body.price_course,
                type_course: req.body.type_course,
                user: req.user
            })

        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new courseControllers;