/**
* Created with Everest End of Year Portfolio - Alejandra Sanchez.
* User: asanchez-ep
* Date: 2015-06-08
* Time: 06:16 PM
* To change this template use Tools | Templates.
*/


//These functions display the current day,date, month, year on the planner
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//This variable allows the month, year, day, date to update itself
var d = new Date();  
document.getElementById("calendar-day-date").innerHTML = day[d.getDay()]+' '+(d.getDate());
document.getElementById("calendar-month-year").innerHTML = month[d.getMonth()]+' '+(1900+d.getYear()); //I had to add 1900 because otherwise it would have been 115

var nameInput = document.getElementById("nameInput"); //getting the HTML input box & storing it in the variable
var descInput = document.getElementById("descInput"); //getting the HTML input box & storing it in the variable

// Variables used for the "Task" function object constructor
var taskContainer = document.getElementById("taskContainer");
var tasks = [];

//Event listener for the delete button (working on it)
// var deleteTask = document.getElementsByClassName("deleteBtn").addEventListener("click",  );

//This is the "add task" button on the planner
var addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.onclick = addNewTask;  


function addNewTask(){  
    var newTask = new Task(nameInput.value, descInput.value, d.getDate(), month[d.getMonth(), d.getYear()+1900] )
    tasks.push(newTask); //function newTask is pushed into the array of tasks
    newTask.init();
//     console.log("hello");
}

//This is the Object Constructor used for creating the new user tasks
function Task(name, description, date, month, year){ 
    this.name = name;
    this.description = description;
    this.date = date;
    this.month = month;
    this.year = year;
    this.init = function(){
        //Where I left off
            //Initializes creation of new div which is the taskholder which will contain the other news divs, check box, and delte button
        this.taskholder = document.createElement("div");  
        this.taskholder.classList.add("taskholder");             //creates the class name 
        taskContainer.appendChild(this.taskholder);             //appends the child
            //creates the nameHolder div where user's task name gets saved
        this.nameHolder = document.createElement("div");   
        this.nameHolder.classList.add("nameHolder");        
        this.nameHolder.innerHTML = "Task Name: " + this.name;  //adds the "task name" stuff
        this.taskholder.appendChild(this.nameHolder);           //appends the name holder div --> to taskholder
            //creates descriptionHolder div where user's task description gets saved
        this.descriptionHolder = document.createElement("div");
        this.descriptionHolder.classList.add("descriptionHolder");
        this.descriptionHolder.innerHTML = "Description: " + this.description;
        this.taskholder.appendChild(this.descriptionHolder);
            //creates input check box
        this.checkbox = document.createElement("input");
        this.checkbox.type = "checkbox";
        this.checkbox.classList.add("checkbox");
        this.taskholder.appendChild(this.checkbox);
            //creates delete button
        this.deleteBtn = document.createElement("button");
        this.deleteBtn.classList.add("deleteBtn");
        this.deleteBtn.innerHTML = "Delete";
        this.taskholder.appendChild(this.deleteBtn);
    }
};


/*
var box = document.getElementById("chkOff");

function changeBoxText(text) {
    box.innerHTML = text;
}
function animateDayNames() {
    for (var i = 0; i < day.length; i++) {
        var dayName = day[i];
        
        changeBoxText(dayName);
    } 
}
animateDayNames();    
*/ 