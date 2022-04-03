const express = require("express");
// Import routers
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");
// Creating an express instance
const app = express();

// Listen to requests on port 3000
app.listen(3000);

// Set up view enginer
app.set("view engine", "ejs");

// Middleware for serving static files
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/new", newRouter);
