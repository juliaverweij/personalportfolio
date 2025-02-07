function toggleNav(){
    document.getElementById("mySidepanel").classList.toggle('open');
    document.getElementById("btn").classList.toggle('open');
  }

let links = [
    "https://juliaverweij.com/coffee.html",
    "https://juliaverweij.com/doors.html",
    "https://juliaverweij.com/paperjam.html",
    "https://juliaverweij.com/julia.html",
    "https://juliaverweij.com/index.html"
];
let randompage = Math.floor(Math.random() * links.length);
let surprisepage = links[randompage];

function randomSurprise() {
    window.location.replace(surprisepage);
}


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