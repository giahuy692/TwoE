
const Course = require("../models/CoursesModel");

class courseControllers {
    GetAllCourse (req, res, next) {
        try {
            const couser = Course.find();
            return res.status(200).json(couser);
            
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async AddCourse (req, res, next){
        const idUser = req.cookies.idUser;
        try {
            const newCourse = await new Course ({
                name_course: req.body.name_course,
                image_course: req.body.avatar,
                price_course: req.body.price_course,
                type_course: req.body.type_course,
                user: idUser
            })
            //save to DB
            const couser = await newCourse.save();
            return res.status(200).json(couser);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new courseControllers;