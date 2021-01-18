
const express= require("express"); 
const bodyParser= require("body-parser"); 
const { urlencoded } = require("body-parser");

const app=express(); 

app.use(bodyParser.urlencoded({extended: true})); 

// creating an array to store the list of toDo list
var items=[]; 

// checks for a view folder in the home directory for a .ejs file
// ejs allows you to manipulate html from the backend 
// must be set after express

app.set('view engine', 'ejs'); 

app.get("/", function(req, res) {

    var today = new Date(); 
    var currentDay = today.getDay(); 


    var options = { weekday: 'long', month: 'long', day: 'numeric' };

    var day=today.toLocaleDateString("en-US", options); 


    // res.render() function is used to render a view and sends rendered
    // html string to client 
    // in this case we are using list.ejs to render the "/" path and
    // designatiing the variable to use
    // kindofday is the variable we use in the ejs file and day is the value
    // we want to assign 
    res.render("list", {kindOfDay: day, newListItems: items}); 


});

app.post("/", function(req, res) {

    // geting the text from the submitted text
    var item=req.body.newItem; 

    // pushing into array


    items.push(item); 

    res.redirect("/"); 

}); 

app.listen(3000, function(){
    console.log("Server started on port 3000"); 

});





