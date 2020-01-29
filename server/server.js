const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Hello world!"});
});

require("./app/routes/student.routes.js")(app);
require("./app/routes/course.routes.js")(app);
require("./app/routes/student-course.routes.js")(app);

app.listen(port, () => {
    console.log("Server is running on port: " + port);
})