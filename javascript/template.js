//Javascript used for all html files

//Adjust font size when tapped on 'A'
document.getElementById("smallA").onclick = function() {changeSize("small")};
document.getElementById("mediumA").onclick = function() {changeSize("medium")};
document.getElementById("largeA").onclick = function() {changeSize("large")};

function changeSize(c){
    document.getElementsByTagName("body")[0].className=c
}



//Display login form
function loginFunction() {
    var x = document.getElementById("loginForm");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



//Responsive navigation bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}