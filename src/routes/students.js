const express = require("express");
const studentController = require("../controllers/students");
const { authenticate } = require("../utils/authMiddleware");

const router = express.Router();
router.use(authenticate);

router.get('/', studentController.getAllStudents);
router.get('/:id ', studentController.getStudent);
router.post('/', studentController.getAllStudents);
router.put('/', studentController.getAllStudents);
router.delete('/', studentController.getAllStudents);
