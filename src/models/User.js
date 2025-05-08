
const bcrypt = require('bcryptjs');
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
    findById: (id) => users.find(user => user.id === id),
    create: async (userData) => {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newUser = {
            id: users.length + 1,
            email: userData.email,
            password: hashedPassword,
            role: userData. role || 'student'
        };
        users.push(newUser);
        //console.log("Created user:", newUser);
        return newUser;
    }
};