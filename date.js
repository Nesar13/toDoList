
// since module is an object we can create methods such as .getDate to call from app.js 


exports.getDate = function () {

    // since these varaibles will be constant
    const today = new Date();
   


    // will use this to format date 
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    const day = today.toLocaleDateString("en-US", options);

    return day;
}

exports.getDay = function () {


    const today = new Date();
    const currentDay = today.getDay();


    // will use this to format date 
   const options = {
        weekday: 'long'
    };

    const day = today.toLocaleDateString("en-US", options);

    return day;
}

