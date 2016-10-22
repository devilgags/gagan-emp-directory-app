//This file contains the database configurations and setup methods

var mongoose = require("mongoose");
var chalk = require('chalk');

//configuring the database connection settings 
var dbURI = 'mongodb://gagan:JaiHo17*@ds043962.mlab.com:43962/emp_dir_app';

//function to connect to MongoDB database
function connect() {
    mongoose.connect(dbURI);

    mongoose.connection.on('connected', function () {
        console.log(chalk.green("Mongoose connected"));
    });

    mongoose.connection.on('error', function (err) {
        console.log("Mongoose error " + JSON.stringify(err));
    });

    mongoose.connection.on('disconnected', function () {
        console.log(chalk.blue("Mongoose disconencted "));
    });
}

var mongoConnect = {
    connect: connect
};

module.exports = mongoConnect;