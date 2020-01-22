const Course = require("../models/course.model");

// Create and Save a new Course
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    // Create a Course
    const course = new Course({
        name: req.body.name,
        description: req.body.description,
        seats: req.body.seats,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    });

    // Save course in the database
    Course.create(course, (err, data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occured while creating the Course."
            });
        else res.send(data);
    });
};

// Retrieve all courses from the database.
exports.findAll = (req, res) => {
    Course.getAll((err, data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving courses."
            });
        else res.send(data);
    })
};

// Find a single Course with a courseId
exports.findOne = (req, res) => {
    Course.findById(req.params.courseId, (err, data) => {
        if(err) {
            if(err.kind == "not_found"){
                res.status(404).send({
                    message: `Not found Course with id ${req.params.courseId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Course with id " + req.params.courseId
                });
            }
        } else {
            res.send(data);
        }
    })
};

// Update a Course identified by the courseId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        req.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    Course.updateById(req.params.courseId, new Course(req.body), (err, data) => {
        if(err) {
            if(err.kind == "not_found") {
                res.status(404).send({
                    message: `Not found Course with id ${req.params.courseId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Course with id " + req.params.courseId
                });
            }
        } else {
            res.send(data);
        }
    });
};

// Delete a Course with the specified courseId in the request
exports.delete = (req, res) => {
    Course.delete(req.params.courseId, (err, data) => {
        if(err) {
            if(err.kind == "not_found") {
                res.status(404).send({
                    message: `Not found Course with id ${req.params.courseId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Course with id " + req.params.courseId
                });
            }
        } else {
            res.send({ message: `Course was deleted successfully!`});
        }
    });
};

// Delete all courses from the database
exports.deleteAll = (req, res) => {
    Course.deleteAll((err, data) => {
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred while removing all courses."
            });
        else
            res.send({ message: "All courses were deleted successfully!"});
    });
};

