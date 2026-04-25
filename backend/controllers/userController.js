import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import userModel from '../Models/userSchema.js';

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "user already exists" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password'length should be greater than 8",
      });
    }
    // bcrypt user password
    const salt = await bcrypt.genSalt(13);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      role: "student",
      password: hashedPassword,
    });
    const user = await newUser.save();

    const payload = { userId: user._id };
    const secretKey = process.env.JWT_SECRET;
    const options = { expiresIn: "3d" };
    const token = jwt.sign(payload, secretKey, options);

    res.json({ success: true, message:"Registered successfully", token, id: user._id});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message });
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({success: false, message: "Invalid email or password" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({success: false, message: "Invalid password" });
    }

    const payload = { userId: user._id };
    const secretKey = process.env.JWT_SECRET || "mySuperSecretKey";
    const options = { expiresIn: "3d" };
    const token = jwt.sign(payload, secretKey, options);

    res.json({success: true, message: "Login successful", token, id:user._id });
  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message });
  }
}

const registerAdmin = async (req, res)=>{
  try {
    const { email, name, password} = req.body;
    if(!email || !password){
      res.json({success: false, message: "Invalid email or password" });
    }

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "admin already exists" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password'length should be greater than or equal to 8",
      });
    }
    // bcrypt user password
    const salt = await bcrypt.genSalt(13);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new userModel({
      name,
      email,
      role: "teacher",
      password: hashedPassword,
    });
    const admin = await newAdmin.save();

    const payload = { userId: admin._id };
    const secretKey = process.env.JWT_SECRET;
    const options = { expiresIn: "3d" };
    const token = jwt.sign(payload, secretKey, options);

    res.json({ success: true, message:"Registered successfully", token, id: admin._id});
  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message });
  }
}

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({success: false, message: "Invalid email or password" });
    }

    const admin = await userModel.findOne({ email });
    if (!admin) {
      return res.json({success: false, message: "admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.json({success: false, message: "Invalid password" });
    }

    const payload = { userId: admin._id };
    const secretKey = process.env.JWT_SECRET || "mySuperSecretKey";
    const options = { expiresIn: "3d" };
    const token = jwt.sign(payload, secretKey, options);

    res.json({success: true, message: "Login successful", token, id:admin._id });
  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message });
  }
}

export { registerUser, loginUser, registerAdmin, loginAdmin };