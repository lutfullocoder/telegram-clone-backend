require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

app.use("/api", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
