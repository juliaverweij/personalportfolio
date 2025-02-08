/* side nav toggle mobile:*/
function toggleNav(){
    document.getElementById("mySidepanel").classList.toggle('open');
    document.getElementById("btn").classList.toggle('open');
}

/* side nav toggle weblog:*/
function toggleNavWeblog(){
    document.getElementById("myWeblog").classList.toggle('open');
    document.getElementById("btnWeblog").classList.toggle('open');
}

/* random page:*/
let links = [
    "https://juliaverweij.com/coffee.html",
    "https://juliaverweij.com/doors.html",
    "https://juliaverweij.com/paperjam.html",,
    "https://juliaverweij.com/black-on-black.html",
    "https://juliaverweij.com/do-you-have-the-time.html",
    "https://juliaverweij.com/frustratie,opluchting.html",
    "https://juliaverweij.com/gallery.html",
    "https://juliaverweij.com/navigating-navigation.html",
    "https://juliaverweij.com/nerves-common-sense.html",
    "https://juliaverweij.com/one-step-at-a-time.html",
    "https://juliaverweij.com/portraits.html",
    "https://juliaverweij.com/unfamiliar.html"
];
let randompage = Math.floor(Math.random() * links.length);
let surprisepage = links[randompage];

function randomSurprise() {
    window.location.replace(surprisepage);
}

/*random image*/
var images = [
    "pictures/weblog/mandarijn.gif",
     "pictures/weblog/trinket.jpeg",
     "pictures/weblog/matcha addicts club.jpeg",
     "pictures/weblog/appicon.jpeg",
     "pictures/weblog/hellokitty.jpeg"
   ];
   
   // this chooses a random number from all available image indices
   var randomImage = images[Math.floor(Math.random() * images.length)];
   console.log(randomImage);
   // make the URL into a proper image tag
   var image = "<img src='" + randomImage + "'>";
   // append to the div
   document.getElementById("randomimage").innerHTML = image;

/* draggable*/
var draggableElements = document.getElementsByClassName("draggable");

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        return false;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - parseInt(e.clientX);
        pos2 = pos4 - parseInt(e.clientY);
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        console.log(elmnt.offsetTop)
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


/* surprise toggle*/
const surprise = document.getElementById("surpriseId");
const toggleSurprise = () => surprise.classList.toggle("show");

window.onclick = (event) => {
    if (!event.target.matches('.surprise')) {
        if(surprise.classList.contains('show')){
            surprise.classList.remove('show')
        }
    }
}
surprise.addEventListener('click', (event) => event.stopPropagation());