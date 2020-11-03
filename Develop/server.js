const express = require ("express");
const mongoose = require("mongoose");

const logger= require("morgan");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//app.use(require("./router/api.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(require("./routes/html.js"));
app.use(require("./routes/backendAPI.js"));

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}!`);
});