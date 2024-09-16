function myFunction() {
  var x = document.getElementById("mytopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//function myFunction() {
//  var element = document.body;
//  element.classList.toggle("dark-mode");
//}

//let mode;
//mode = localStorage.getItem('mode');

//if (mode === 'light'){
//  lightMode();
//}else{
//  darkMode();
//}

function darkMode() {
  const wasdarkMode = localStorage.getItem('darkMode') === 'true';
  localStorage.setItem('darkMode', !wasdarkMode);
  const element = document.body;
  element.classList.toggle('dark-mode', !wasdarkMode);
}
function onload() {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkMode') === 'true');
}