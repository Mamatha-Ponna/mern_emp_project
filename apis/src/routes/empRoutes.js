const express = require('express');
const { loginController, creatingEmployee, getAllData, updateEmployee, deleteEmployee } = require('../controllers/empController');
const router = express.Router();

// Define routes for user-related operations
router.post('/login', loginController);

router.post('/createEmployee', creatingEmployee);

router.post('/editEmployee', updateEmployee);

router.post('/deleteEmployee', deleteEmployee);

router.post('/getAllEmp', getAllData);

module.exports = router;