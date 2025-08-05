const express = require("express"); 
const router = express.Router();

const { createUser } = require("../controllers/createUser");
const { getleaderboard } = require("../controllers/getleaderboard");
const { loginUser } = require("../controllers/createUser");


router.post("/createUser", createUser);
router.get("/getleaderboard", getleaderboard);
router.post("/loginUser", loginUser);

module.exports = router;