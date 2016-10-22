//This is the controller for employee . This file contains all the controller methods for employee

var employeeService = require('../service/employee.service');

/**
 * function to add employee
 */
function addEmployee(req, res) {
    employeeService.addEmployee(req.body).then(function (employees) {
        console.log(JSON.stringify(employees));
        var response={
            message:employees
        };
        res.status(200).json(employees);
    }).then(undefined, function (err) {
        res.status(500).json(err);
    })
}

/**
 * function to get all the employees
 */
function getAllEmployees(req, res) {
      employeeService.getAllEmployees().then(function (employees) {
        console.log(JSON.stringify(employees));
        res.status(200).json(employees);
    }).then(undefined, function (err) {
        res.status(500).json(err);
    })
}

/**
 * dunction to delete an employee by id
 */
function deleteEmployee(req, res) {
      employeeService.deleteEmployee(req.params.id).then(function (resultMessage) {
        res.status(200).json(resultMessage);
    }).then(undefined, function (err) {
        res.status(500).json(err);
    })
}

/**
 * function to update an employee
 */
function updateEmployee(req, res) {
     employeeService.updateEmployee(req.params.id,req.body).then(function (employee) {
        console.log(JSON.stringify(employee));
        res.status(200).json(employee);
    }).then(undefined, function (err) {
        res.status(500).json(err);
    })
}

//encapsulating all the above declared functions and exporting it as an object
var employeeController = {
    addEmployee: addEmployee,
    getAllEmployees:getAllEmployees,
    deleteEmployee:deleteEmployee,
    updateEmployee:updateEmployee
};

module.exports = employeeController;