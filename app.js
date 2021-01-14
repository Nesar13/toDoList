
const express= require("express"); 
const bodyParser= require("body-parser"); 

const app=express(); 

// checks for a view folder in the home directory for a .ejs file
// ejs allows you to manipulate html from the backend 
// must be set after express

app.set('view engine', 'ejs'); 

app.get("/", function(req, res) {

    var today = new Date(); 
    var currentDay = today.getDay(); 
    var day = ""; 
    if (currentDay === 6 || currentDay===0) {
        day ="Weekend"; 
    }else {
        day = "Weekday"; 
    }

    // res.render() function is used to render a view and sends rendered
    // html string to client 
    // in this case we are using list.ejs to render the "/" path and
    // designatiing the variable to use
    // kindofday is the variable we use in the ejs file and day is the value
    // we want to assign 
    res.render("list", {kindOfDay: day}); 


});

app.listen(3000, function(){
    console.log("Server started on port 3000"); 

});





