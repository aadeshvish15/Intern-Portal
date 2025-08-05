const User = require("../models/User");
const bcrypt = require("bcrypt");

//User register
exports.createUser = async (req, res) => {
  try {
    //FETCH USER DETAILS FROM FRONTEND(BODY)
    const { name, email, password } = req.body;

    //VALIDATE FIELDS
    if (!email || !name || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    //CHECK IF USER EXISTS USING EMAIL
    const checkUserEmail = await User.findOne({ email });
    if (checkUserEmail) {
      return res.status(401).json({
        success: false,
        message: "User already exist",
      });
    }
    //HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    //referrel code for USER
    const referralCode = name.toLowerCase().replace(/\s+/g, "").concat("2025");
    // console.log("ref code:", referralCode);

    //Random amount raised for user
    const amountRaised = Math.floor(Math.random() * 10000);

    //CREATE USER
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      referralCode,
      amountRaised: amountRaised,
    });

    //SEND RESPONSE
    res.status(200).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log("There was a problem in registering user");
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// USER LOGIN
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or user not found",
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password); // password field should match the schema
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const responseUser = {
      name: user.name,
      email: user.email,
      referralCode: user.referralCode,
      amountRaised: user.amountRaised,
    };

    // Send success response
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: responseUser,
    });
  } catch (error) {
    console.error("Error in loginUser controller:", error);
    res.status(500).json({
      success: false,
      message: "An internal server error occurred. Please try again later.",
    });
  }
};
