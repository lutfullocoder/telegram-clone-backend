require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api", require("./routes/index"));

app.use(errorMiddleware);

const bootstrap = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

bootstrap();
