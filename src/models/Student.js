let students = [];
let nextId = 1;

module.exports = {
    getAll: () => students,
    getById: (id) => {
        console.log('Searching for iD:', id, 'Type:', typeof id);
        console.log('Current students:', students);
        return students.find(s => {
            console.log(`Comparing ${s.id} (${typeof s.id}) witj ${id} (${typeof id})`);
            return s.id === id
        })
    },
    create: (student) => {
        const newStudent = { ...student, id: nextId++};
        students.push(newStudent);
        return newStudent;
    },
    update: (id, updates) => {
        const index = students.findIndex(s => s.id === id);
        if (index === -1) return null;

        students[index] = { ...students[index], ...updates};
        return students[index];
    },
    delete: (id) => {
        students = students.filter(s => s.id !== id);
        return true;
    }
}