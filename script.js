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