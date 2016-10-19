var mongoose = require("mongoose");
var chalk = require('chalk');
// var userModel=require("./models/user.model");
// var storyModel=require("./models/story.model");
var dbURI = 'mongodb://gagan:JaiHo17*@ds043962.mlab.com:43962/emp_dir_app';

function connect(){
    mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log(chalk.green("Mongoose connected"));
    /*   var newUser=new userModel();
       newUser.username="1";
   
       newUser.email="a@b.con";
       newUser.password="abc124";
       newUser.save();
   */
});
mongoose.connection.on('error', function (err) {
    console.log("Mongoose error " + JSON.stringify(err));
});

mongoose.connection.on('disconnected', function () {
    console.log(chalk.blue("Mongoose disconencted "));
});
}

var mongoConnect={
    connect:connect
};

module.exports=mongoConnect;