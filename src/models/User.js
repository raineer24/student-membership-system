const users = [
    {
        id: 1,
        email: 'seryra1@gmail.com',
        password: '$2a$10$examplehashedpassword',
        role: 'admin'
    }
];

module.exports = {
    findByEmail: (email) => users.find(user => user.email === email),
    findById: (id) => users.find(user => user.id === id)
}