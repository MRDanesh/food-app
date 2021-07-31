import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

// Description: Auth user & get token
// Route: POST /api/users/login
// Access: Public


export const authUser = async (req, res, next) => {
    const {email, password} = req.body;
    console.log('login');
    const user = await User.findOne({email});

    if (user) {
        // check password
        const hashedPassword = user.password;
        const isPasswordCorrect = bcrypt.compareSync(password, hashedPassword);
        if (isPasswordCorrect) {
            res.send({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            })
        } else {
            res.status(401);
            const err =  new Error ('Invalid Password!');
            next(err);
        } 
        
    } else {
        res.status(401);
        const err =  new Error ('User not found!');
        next(err);
    }
}


// Description: Generate a profile
// Route: POST /api/users
// Acess: public

export const registerUser = async (req, res, next) => {
    const {username, email, password} = req.body;
    console.log('register!');
    const existingUser = await User.findOne({email});
    if (existingUser) {
        const error = new Error ('User is already exist');
        next(error);
    } else {
        var salt = bcrypt.genSaltSync(10);
        var hashedPass = bcrypt.hashSync(password, salt);
        try {
            const registeredUser = await User.create({
                username, email, password: hashedPass
            });

            if (registeredUser) {
                res.status(201);
                res.send({
                    _id: registeredUser._id,
                    username: registeredUser.username,
                    email: registeredUser.email,
                    token: generateToken(registeredUser._id)
                })
            } else {
                const error = new Error('Something went wrong in registering process!')
                next(error);
            }

        } catch (err) {
            const error = new Error('something went wrong in registering process');
            next(error);
        }
    }
}
