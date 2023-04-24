const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/stu-social-db');

const userSchema = mongoose.Schema({});
const postSchema = mongoose.Schema({});
const friendSchema = mongoose.Schema({});

app.route("/")
.get((req, res) => {
    
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
});