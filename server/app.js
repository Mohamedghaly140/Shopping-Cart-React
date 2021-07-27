const path = require("path");

const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const HttpError = require("./models/HttpError");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// body parser middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Serving statics images
app.use("/public/images", express.static(path.join("public", "images")));
app.use("/public/video", express.static(path.join("public", "video")));

// Dev Logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// import routes files
const productsRoutes = require("./routes/productRoutes");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

// excute routes
app.use("/api/products", productsRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not found this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).json({
    message: error.message || "An unknown error occured! Server Error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`.yellow.bold);
});
