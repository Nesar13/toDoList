
function getDate() {


let today = new Date(); 
let currentDay = today.getDay(); 


// will use this to format date 
let options = { weekday: 'long', month: 'long', day: 'numeric' };

let day=today.toLocaleDateString("en-US", options); 
}