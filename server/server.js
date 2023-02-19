const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models/index");
const config = require("./config/db.config");
const { mongoose } = require("./models/index");
const carRoutes = require("./routes/cars.routes");
const feedRoutes = require("./routes/feed.routes");
const rentRoutes = require("./routes/rent.routes");
const userRoutes = require("./routes/user.routes");
const loginRoutes = require("./routes/login.routes");
const newCarRoutes = require("./routes/newCar.routes");
const adminRoutes = require("./routes/admin.routes");
const adminLoginRoutes = require("./routes/adminLogin.routes");

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(carRoutes);
app.use(feedRoutes);
app.use(rentRoutes);
app.use(userRoutes);
app.use(loginRoutes);
app.use(newCarRoutes);
app.use(adminRoutes);
app.use(adminLoginRoutes)

mongoose.set("strictQuery", false);

db.mongoose
  .connect(
    `mongodb+srv://${config.userName}:${config.password}@cluster1.qhcltxw.mongodb.net/test`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: config.dbName,
    }
  )
  .then(() => console.log("connection to the database was successful"))
  .catch((err) => console.log("connection to the database failed", err));

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});
