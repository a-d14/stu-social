const express = require('express');
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.route("/")
.get((req, res) => {
    
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
});