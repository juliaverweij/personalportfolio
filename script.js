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


function openSite() {
    var links = [
                  "google.com",
                  "youtube.com",
                  "reddit.com",
                  "apple.com"]
    
                openSite = function() {
                  // get a random number between 0 and the number of links
                  var randIdx = Math.random() * links.length;
                  // round it, so it can be used as array index
                  randIdx = parseInt(randIdx, 10);
                  // construct the link to be opened
                  var link = 'http://' + links[randIdx];
                  };
                  
        return link;
        
        document.getElementById("link").innerHTML = openSite();
    }