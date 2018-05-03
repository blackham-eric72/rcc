// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// // Get the header
 var header = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// get section 1 
var section = document.getElementById('one');
var stickyPoint = section.offsetTop;
console.log(stickyPoint);

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= stickyPoint) {
    header.classList.add("sticky-menu");
  } else {
    header.classList.remove("sticky-menu");
  }
} 

function openSideMenu(){
    var sideMenu = document.getElementById('sideMenu');
    var sideNav = document.getElementById('side-nav');
    var links = document.getElementsByClassName('side-nav-link');
    var hamMenu = document.getElementById('hamburgerMenu');
    var line1 = document.getElementById('navone');
    var lines = document.getElementsByClassName('hamLine')
    var menuTxt = document.getElementById('menuText');
    if(sideMenu.style.width == "250px") {
        for(i=0; i < lines.length; i++){
            lines[i].classList.remove('close');
        }
        menuTxt.style.overflowX = "visible";
        hamMenu.style.marginLeft = 0;
        sideMenu.style.width = 0;
        sideNav.style.width = 0;
        for(i = 0; i < links.length; i++){
            links[i].style.color = "transparent";
        }
    }else{
        for(i=0; i < lines.length; i++){
            lines[i].classList.add('close');
        }
        menuTxt.style.overflowX = "hidden";
        hamMenu.style.marginLeft = "200px";
        sideMenu.style.width = "250px";
        sideNav.style.width = "250px";
        for(i = 0; i < links.length; i++){
            links[i].style.color = "white";
        }
        
    }

}

function createCalendar(){
    // **********************GET ALL OF THE STARTING INFO
    var d = new Date();
    var year = d.getFullYear(); 
    console.log(year);
    var month = d.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // returns the date as a number, i.e. 1-31
    var date = d.getDate(); 
    // returns the day as 0-6 in the day array. 0= Sunday, 6 = Saturday
    var day = d.getDay();
    var monthDiv = document.getElementById('month');
    var daysList = document.getElementsByClassName('day');
    // finds the first day of the current month
    var fd = new Date(year, month, 1);
    var firstDay = fd.getDay();
    // finds the last day of the current month
    var ld = new Date(year, month + 1, 0);
    var lastDay = ld.getDate();
    // ***************************************************
    
    monthDiv.innerHTML = months[month];

    // Find out which day to start populating the calendar with. 
    var startDay = "";
    console.log(firstDay);
    switch (firstDay){
        case 0: 
            startDay = 0;
            break;
        case 1: 
        startDay = 1;
        break;
        case 2: 
        startDay = 2;
        break;
        case 3: 
        startDay = 3;
        break;
        case 4: 
        startDay = 4;
        break;
        case 5: 
        startDay = 5;
        break;
        case 6: 
        startDay = 6;
        break;
    }
    var j = 1;
    for(i=startDay; i <= lastDay + 1; i++){
        daysList[i].innerHTML = j;
        daysList[i].setAttribute('onclick', 'doIt(' + j + ')');
        j++;
    }

    // addListeners();


// function addListeners(){
//     var daysList = document.getElementsByClassName('day')

//     for(i=0; i < daysList.length; i++){
//         if(daysList[i].innerHTML != null)
//     }
}

function doIt(date){
    alert(date);
}