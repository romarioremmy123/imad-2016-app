console.log('Loaded!');
var margin = 0;
var element = document.getElementById("romy");
element.onclick = function() {
    var interval = setInterval(moveRight, 100);
};

var moveLeft = function() {
    margin+=10;
    element.style.marginLeft(margin+"px");
};