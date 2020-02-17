const express = require("express");
const app = express();

// Initialise middlewares
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
//app.use("/api/posts", require("./routes/api/posts"));

app.get("/", (req, res) => {
  res.send("API is work");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
