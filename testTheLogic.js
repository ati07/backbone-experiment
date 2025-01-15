// var b = 5

// function test(){
//     var b = 10
// }
// var b;

// console.log(b)

// let obj = {};
// let obj1 = {"name1":"Atiur"};
// let obj2 = {"name2":"Ansari"};
// let obj3 = {"name3":"Shama", address:{city:"motihari"}};

// _.extend(obj,obj1,obj2,obj3);


// console.log(obj);


var events = {}; // Initialize an empty object for storing event handlers

// Add an event handler for the 'click' event
var name = 'click';
var handlers = events[name] || (events[name] = []); // Ensures 'click' has an array for handlers
handlers.push(function() { console.log('Click event triggered!'); }); // Adds the handler

// Trigger the event
console.log(events['click'][0]()); // Outputs: "Click event triggered!"
console.log(events,handlers); // Outputs: "Click event triggered!"
