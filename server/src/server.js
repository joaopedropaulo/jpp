const express = require("express");
const connectDB = require("../config/db");
const app = express();

// Connect to DB
connectDB();

// Initialise middlewares
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/auth", require("./routes/api/auth/auth"));
app.use("/api/profile", require("./routes/api/profile/index"));
app.use("/api/users", require("./routes/api/users/users"));

app.get("/", (req, res) => {
  res.send("API is work");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
