const Course = require('../../models/Courses');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SitesController {
    // Get /news
    index(req, res, next) {
            Course.find({})
                .then((courses) => {
                    // courses = courses.map(course => course.toObject())
                    res.render('home', {
                        courses: multipleMongooseToObject(courses),
                    });
                })
                .catch(next);

            // res.render('home');
        }
        // Get /news/:slug
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SitesController();