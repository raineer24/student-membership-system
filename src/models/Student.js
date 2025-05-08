let students = [];
let nextId = 1;

module.exports = {
  getAll: () => students,
  getById: (id) => {
    const numId = Number(id); //Convert to number
    return students.find((s) => {
      return s.id === numId;
    });
  },
  create: (student) => {
    const newStudent = { ...student, id: nextId++ };
    students.push(newStudent);
    return newStudent;
  },
  update: (id, updates) => {
    const numId = Number(id);
    const index = students.findIndex((s) => s.id === numId);
    if (index === -1) return null;

    students[index] = { ...students[index], ...updates };
    return students[index];
  },
  delete: (id) => {
    const numId = Number(id);
    students = students.filter((s) => s.id !== numId);
    return true;
  },
};
