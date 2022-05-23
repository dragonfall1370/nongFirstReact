import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name:'Basir',
            email:'admin@example.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin:true,
        },
        {
            name:'John',
            email:'John.User@example.com',
            password:bcrypt.hashSync('12345', 8),
            isAdmin:false,
        },
        {
            name:'Long',
            email:'long.den@test.com',
            password:bcrypt.hashSync('long1234', 8),
            isAdmin:true,
        },
    ],
};

export default data;