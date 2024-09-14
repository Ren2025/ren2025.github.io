document.getElementById('searchform').onsubmit = function() {
    window.location = 'http://www.google.com/search?q=site:ren2025.github.io ' + document.getElementById('test').value;
    return false;
}