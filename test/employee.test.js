
// var employeeService=require('./service/employee.service');
var expect = require('chai').expect;
// var db=require('./db');
var request = require('request');

describe('employee-tests', function () {

  var baseUrl = "http://localhost:7000/emp-dir-services/employees";


  // 1. to test the PI for getting al the employees
  it("get all employees returns status 200", function () {
    request(baseUrl, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });



  // 2. to test the api for adding and deleting an employee
  it("add employee and delete employee", function () {

    var id = "";

    //adding an employee
    request({
      url: "http://localhost:7000/emp-dir-services/employees", //URL to hit
      method: 'POST',
      json: {
        name: "Gagan",
        email: "gagan@gmail.com",
        date_of_birth: "2010-10-10T15:18:00.000Z",
        age: 6,
        gender: "Male",
        department: "digital"
      }
    }, function (error, response, body) {
      console, log()
      expect(response.statusCode).to.equal(201);
      console.log("ID : " + id);
      id = body._id;

    });

    //deleting the added employee
    request({
      url: "http://localhost:7000/emp-dir-services/employees" + id,
      method: 'DELETE'
    }, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      console.log("test employee with id : " + id + " deleted");
    })
  });





  // 3. to test the api for adding ,upadting and deleting an employee
  it("add ,update and delete employee", function () {

    var id = "";

    //adding an employee
    request({
      url: "http://localhost:7000/emp-dir-services/employees", //URL to hit
      method: 'POST',
      json: {
        name: "Gagan",
        email: "gagan@gmail.com",
        date_of_birth: "2010-10-10T15:18:00.000Z",
        age: 6,
        gender: "Male",
        department: "digital"
      }
    }, function (error, response, body) {
      console, log()
      expect(response.statusCode).to.equal(201);
      expect(body.name).to.equal("Gagan");
      console.log("ID : " + id);
      id = body._id;

    });

    request({
      url: "http://localhost:7000/emp-dir-services/employees" + id,
      method: 'PUT',
      json: {
        name: "Gagan Vasudev",
        email: "gagan_vasudev@gmail.com",
        date_of_birth: "1993-07-17T06:45:00.000Z",
        age: 24,
        gender: "Male",
        department: "Devops"
      }
    }, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body.name).to.equal("Gagan Vasudev");
      console.log(" employee with id : " + id + " updated");
    })


    //deleting the added employee
    request({
      url: "http://localhost:7000/emp-dir-services/employees" + id,
      method: 'DELETE'
    }, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      console.log("test employee with id : " + id + " deleted");
    });
  });

});