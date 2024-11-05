const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

const JWT_SECRET = process.env.JWT_SECRET || "I am aniket Kulkarni"; // Make sure JWT_SECRET is set in your environment variables

//Route 1:Authenticate a usercreate using: POST "api/auth/createuser" no login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    try {
      // Check if the user with the given email already exists
      let existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res
          .status(400)
          .json({success, error: "User with this email already exists" });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create the new user
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      // Create JWT payload
      const data = {
        user: {
          id: user.id,
        },
      };

      // Sign the JWT token
      const authtoken = jwt.sign(data, JWT_SECRET);

      // Respond with the created user and token
      success = true;
      res.json({success, user, authtoken });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({success, error: "Internal Server Error" });
    }
  }
);

//Route 2:Authenticate a user using: POST "api/auth/login" no login required

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({success, error: "Please try to login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      // Sign the JWT token
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({success, authtoken });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

//Route 3:Get loggedin user details using: POST "api/auth/getuser" login required
router.post(
  "/getuser", fetchuser,
  async (req, res) => {
    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
module.exports = router;
