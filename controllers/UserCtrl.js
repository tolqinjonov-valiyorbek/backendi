const User = require('../models/UserModel.js');
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const { generateToken } = require('../middlerwares/generateToken.js');


const createUser = asyncHandler(async (req, res) => {
    const {fullName, email, password} = req.body;
    try {
        const userExists = await User.findOne({email})
        if(userExists) {
            res.status(400)
            throw new Error("User already exists")
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            fullName,
            email,
            password:hashedPassword,
        });


        if(user) {
            res.status(201).json({
                _id: user._id,
                fullName: user. fullName,
                email: user.email,
                token: generateToken(user._id),
              });
        }

        else {
            res.status(400) ;
            throw new Error("Invalid user data");
        }
    } catch (error) {
        console.log(error);
    }
});

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id:user._id,
                fullName: user.fullName,
                email:user.email,
                token:generateToken(user._id),
            });

        }
        else {
            res.status(401);
            throw new Error("Invalid email or password")
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

const updateUserProfile = asyncHandler(async(req, res) => {
    const {fullName, email, image} = req.body;
    try {
        const user = await User.findById(req.user._id);

        if(user) {
            user.fullName = fullName || user.fullName;
            user.email = email || user.email;
            const updatedUser = await user.save();

            res.json({
                _is:updatedUser._id,
                fullName:updatedUser.fullName,
                email:updatedUser.email,
                token:generateToken(updatedUser._id),
            });
        }
        else {
            res.json(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});


const deleteUserProfile = asyncHandler(async(req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if(user) {
        if(user.isAdmin) {
            res.status(400);
            throw new Error("Can't delete admin user")
        }
        await user.remove();
        res.json({message:"User deleted successfully"})
    }
    else {
        res.status(404);
        throw new Error("User not found")
    }
  } catch (error) {
    res.status(400).json({message:error.message});
  }
    
});




module.exports = {
    createUser,
    loginUser,
    updateUserProfile,
    deleteUserProfile,
}