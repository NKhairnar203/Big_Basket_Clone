const express = require("express")
const app = express();
require("dotenv").config();
app.use(express.json());
const Port = process.env.PORT
const connection = require("./config/db.config")

const cors = require("cors");

const corsOption = {
  origin: "http://127.0.0.1:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOption));

const UserRoute = require("./routes/user.route")
const ProductRoute = require("./routes/product.route")


app.use("/api/auth", UserRoute);
app.use("/api/product", ProductRoute);


app.listen(Port, async () => {
  try {
   
    await connection;
    console.log(`Server is running on port ${Port} And Database`);
  } catch (error) {
    throw error;
  }
});