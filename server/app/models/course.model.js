const sql = require("./db");

// constructor
const Course = function(course) {
    this.name = course.name;
    this.description = course.description;
    this.seats = course.seats;
    this.start_date = course.start_date;
    this.end_date = course.end_date;
};

Course.create = (newCourse, result) => {
    return new Promise((resolve, reject) => {
        sql.query("INSERT INTO courses SET ?", newCourse, (err, res) => {
            if(err) {
                result(err, null);
                return reject(err);
            }
            result(null, { id: res.insertId, ...newCourse });
            return resolve(res[0]);
        });
    });
};

Course.findById = (courseId, result) => {
    return new Promise((resolve, reject) => {
        sql.query("SELECT * FROM courses WHERE id = ?", [courseId], (err, res) => {
            if(err) {
                result(err, null);
                return reject(err);
            }
            result(null, res[0]);
            return resolve(res[0]);
        });
    });
};

Course.getAll = result => {
    return new Promise((resolve, reject) => {
        sql.query("SELECT * FROM courses", (err, res) => {
            if(err) {
                result(null, err);
                return reject(err);
            }
            result(null, res);
            return resolve(res);
        });
    });
};

Course.updateById = (id, course, result) => {
    return new Promise((resolve, reject) => {
        sql.query("UPDATE courses SET name = ?, description = ?, seats = ?, start_date = ?, end_date WHERE id = ?",
            [course.name, course.description, course.seats, course.start_date, course.end_date, id], (err, res) => {
                if(err) {
                    result(null, err);
                    return reject(err);
                }
                result(null, { id: id, ...course});
                return resolve(res[0]);
            });
    });
};

Course.delete = (id, result) => {
    return new Promise((resolve, reject) => {
        sql.query("DELETE FROM courses WHERE id = ?", id, (err, res) => {
            if(err) {
                result(null, err);
                return reject(err);
            }
            result(null, res);
            return resolve(res[0]);
        });
    });
};

Course.deleteAll = result => {
    return new Promise((resolve, reject) => {
        sql.query("DELETE FROM courses", (err, res) => {
            if(err) {
                result(null, err);
                return reject(err);
            }
            console.log(`deleted ${res.affectedRows} courses`);
            result(null, res);
            return resolve(res);
        });
    });
};

module.exports = Course;