const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
