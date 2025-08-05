const User = require("../models/User");

//Controller for fetching data for leaderboard
exports.getleaderboard = async (req, res) => {
  try {
    const leaderboard = await User.find({})
      .select("name amountRaised")
      .sort({ amountRaised: -1 });

    res.status(200).json({
      success: true,
      message: "Leaderboard fetched successfully",
      leaderboard,
    });
  } catch (error) {
      console.log("Error fetching leaderboard:", error);
      
    res.status(500).json({
      success: false,
      message: "Failed to fetch leaderboard",
    });
  }
};
