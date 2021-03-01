
module.exports.getDate = function () {


    let today = new Date();
    let currentDay = today.getDay();


    // will use this to format date 
    let options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    let day = today.toLocaleDateString("en-US", options);

    return day;
}

module.exports.getDay = function () {


    let today = new Date();
    let currentDay = today.getDay();


    // will use this to format date 
    let options = {
        weekday: 'long'
    };

    let day = today.toLocaleDateString("en-US", options);

    return day;
}

