const Course = require('../../models/Courses');
const { multipleMongooseToObject } = require('../../util/mongoose');

class meController {
    stored(req, res, next) {

        let courseQuery = Course.find({});
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            })
        }

        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([course, deletedCount]) => {
                res.render('me/stored-course', {
                    deletedCount,
                    courses: multipleMongooseToObject(course),
                });
            })
            .catch(next);

        // Course.find({})
        //     .then((course) =>
        //         res.render('me/stored-course', {
        //             courses: multipleMongooseToObject(course),
        //         }),
        //     )
        //     .catch(next);
    }
    trash(req, res, next) {
        Course.findDeleted({})
            .then((course) =>
                res.render('me/trash-course', {
                    courses: multipleMongooseToObject(course),
                }),
            )
            .catch(next);
    }
}
module.exports = new meController();