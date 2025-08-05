const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

// Middleware
app.use(express.json());

// Database and routes
const { DBconnect } = require("./configs/database");
DBconnect();

//routing of controllers
const userRoutes = require("./routes/userRoutes");
app.use('/api/v1', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send(`<h1>ALL THE BEST FOR TASK.<br /> YOU CAN DO IT. HAVE FAITH IN YOU.</h1>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
