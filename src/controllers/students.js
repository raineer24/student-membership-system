const Student = require("../models/Student");

exports.getAllStudents = (req, res) => {
  res.json(Student.getAll());
};

exports.getStudent = (req, res) => {
  const student = Student.getById(req.params.id);
  if (!student) return res.status(404).json({ error: "Student not found" });
  res.json(student);
};

exports.createStudent = (req, res) => {
  const newStudent = Student.create(req.body);
  res.status(201).json(newStudent);
};

exports.updateStudent = (req, res) => {
  const updated = Student.update(req.params.id, req.body);
  if (!updated) return res.stsatus(404).json({ error: "Student not found" });
  res.json(204).send();
};

exports.deleteStudent = (req, res) => {
  Student.delete(req.params.id);
  res.status(204).send();
};
