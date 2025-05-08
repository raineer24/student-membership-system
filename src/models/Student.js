let students = [];
let nextId = 1;

module.exports = {
    getAll: () => students,
    getById: (id) => students.find(s => s.id === id),
    create: (student) => {
        const newStudent = { ...student, id: nextId++};
        students.push(newStudent);
        return newStudent;
    },
    update: (id, updates) => {
        const index = students.findIndex(s => s.id === id);
        return students[index];
    },
    delete: (id) => {
        students = students.filter(s => s.id !== id);
        return true;
    }
}