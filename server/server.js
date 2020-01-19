const express = require("express");
const app = express();

// Initialise middlewares
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API is working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
