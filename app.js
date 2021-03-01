
const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// creating an array to store the list of toDo list
let items = [];
let workItems = [];

// checks for a view folder in the home directory for a .ejs file
// ejs allows you to manipulate html from the backend 
// must be set after express

app.set('view engine', 'ejs');

// we have to indicate that nodejs will use static files in the public folder
// we are currently using css 

app.use(express.static("public"));

app.get("/", function (req, res) {



    // res.render() function is used to render a view and sends rendered
    // html string to client 
    // in this case we are using list.ejs to render the "/" path and
    // designating the variable to use
    // kindofday is the variable we use in the ejs file and day is the value
    // we want to assign 
    // newListItems is the bullet list that we will use in the html
    let day = date.getDate();


    res.render("list", { listTitle: day, newListItems: items });


});

app.post("/", function (req, res) {

    // geting the text from the submitted text
    // note that we are using bodyParser to get the body 
    var item = req.body.newItem;

    // depending on the route we are using, we will add to appropriate list
    if (req.body.list === "Work") {
        workItems.push(item);
        //redirecting to work route
        res.redirect("/work");

    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function (req, res) {

    res.render("list", { listTitle: "Work", newListItems: workItems });
});


app.get("/about", function (req, res) {

    res.render("about");
})


app.listen(3000, function () {
    console.log("Server started on port 3000");

});





