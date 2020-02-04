const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const Student = require("../models/student.model");

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.use(new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: keys.facebook.callbackURL,
    profileFields: ['email', 'name'],
    enableProof: true
},
    (accessToken, refreshToken, profile, done) => {
        console.log('passport callback function fired');
        const { email, first_name, last_name } = profile._json;

        const userData = {
          email: email,
          f_name: first_name,
          l_name: last_name,
          active: 1
        };

        const student = new Student(userData);

        Student.findByEmail(email, (err, data) => {
          if(err) {
            console.log("Couldn't find student with email: " + email);
          }
          console.log(data);
        }).then((value) => {
          console.log("Successfully found student by email: " + email);
          console.log(value);
          done();
          //studData.push(val);
        }).catch((reason) => {
          console.error("Couldn't find student with email: " + email);
          console.error(reason);
        });

        Student.create(student, (err, data) => {
          if(err){
              console.error("student already exists");
              return;
          }
          console.log(data);
        }).then((value) => {
          console.log("Successfully added student to students table");
          done();
        }).catch((reason) => {
          console.error("Error adding student to students table\n" + reason);
        });

        console.log('email: ' + email + '\n' + 'first_name: ' + first_name + '\nlast_name: ' + last_name);
        //console.log(profile);
        //console.log(profile._json.email); 
        done();
    }
));
