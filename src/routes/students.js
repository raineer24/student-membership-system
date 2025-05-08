const express = require("express");
const studentController = require("../controllers/students");
const { authenticate, authorize } = require("../utils/authMiddleware");
const { ROLES } = require('../config');

const router = express.Router();
router.use(authenticate);

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudent);
router.post('/', authorize([ROLES.ADMIN]), studentController.createStudent);
router.put('/:id', authorize([ROLES.ADMIN]), studentController.updateStudent);
router.delete('/:id', authorize([ROLES.ADMIN]), studentController.deleteStudent);


module.exports = router;