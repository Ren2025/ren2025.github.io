document.getElementById('searchform').onsubmit = function() {
    window.location = 'http://www.google.com/search?q=site:ren2025.github.io ' + document.getElementById('test').value;
    return false;
}

function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}