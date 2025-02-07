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


var sites = [
    'http://www.google.com',
    'http://www.stackoverflow.com',
    'http://www.example.com',
    'http://www.youtube.com'
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}