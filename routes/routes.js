//This file contains all the route mappings for various routes for the application.

var express = require('express');
var employeeController=require('../controllers/employee.controller.js')
var router = express.Router();


router.post("/emp-dir-services/employees",employeeController.addEmployee);
router.get("/emp-dir-services/employees",employeeController.getAllEmployees);

router.put("/emp-dir-services/employees/:id",employeeController.updateEmployee);
router.delete("/emp-dir-services/employees/:id",employeeController.deleteEmployee);



module.exports = router;
