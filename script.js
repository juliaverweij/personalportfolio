function toggleNav(){
    document.getElementById("mySidepanel").classList.toggle('open');
    document.getElementById("btn").classList.toggle('open');
  }


  /*let text;
  if (Math.random() < 0.5) {
    text = "<a href='https://juliaverweij.com/coffee.html'>Random Project!</a>";
  } else if (Math.random() < 1) {
    text = "<a href='https://juliaverweij.com/doors.html'>Random Project!</a>";
  } else if (Math.random() < 1.5) {
    text = "<a href='https://juliaverweij.com/black-on-black.html'>Random Project!</a>";
  } else if (Math.random() < 2) {
    text = "<a href='https://juliaverweij.com/frustratie,opluchting.html'>Random Project!</a>";
  } else if (Math.random() < 2.5) {
    text = "<a href='https://juliaverweij.com/gallery.html'>Random Project!</a>";
  } else if (Math.random() < 3) {
    text = "<a href='https://juliaverweij.com/index.html'>Random Project!</a>";
  } else if (Math.random() < 3.5) {
    text = "<a href='https://juliaverweij.com/navigating-navigation.html'>Random Project!</a>";
  } else if (Math.random() < 4) {
    text = "<a href='https://juliaverweij.com/nerves-common-sense.html'>Random Project!</a>";
  } else if (Math.random() < 4.5) {
    text = "<a href='https://juliaverweij.com/one-step-at-a-time.html'>Random Project!</a>";
  } else if (Math.random() < 5) {
    text = "<a href='https://juliaverweij.com/portraits.html'>Random Project!</a>";
  } else if (Math.random() < 5.5) {
    text = "<a href='https://juliaverweij.com/unfamiliar.html'>Random Project!</a>";
  } else {
    text = "<a href='https://juliaverweij.com/paperjam.html'>Random Project!</a>";
  }
  document.getElementById("demo").innerHTML = text;*/

/*var links = [
    "https://juliaverweij.com/coffee.html",
    "https://juliaverweij.com/doors.html",
    "https://juliaverweij.com/black-on-black.html",
    "https://juliaverweij.com/frustratie,opluchting.html",
    "https://juliaverweij.com/gallery.html",
    "https://juliaverweij.com/index.html",
    "https://juliaverweij.com/navigating-navigation.html",
    "https://juliaverweij.com/nerves-common-sense.html",
    "https://juliaverweij.com/one-step-at-a-time.html",
    "https://juliaverweij.com/portraits.html",
    "https://juliaverweij.com/unfamiliar.html",
    "https://juliaverweij.com/paperjam.html",
];*/ 

function generateRandomLink(){
    var random = Math.floor(Math.random() * links.length);
    return random;
}

window.open(generateRandomLink(), "_self");



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