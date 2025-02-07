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

function toggleNav(){
    document.getElementById("mySidepanel").classList.toggle('open');
    document.getElementById("btn").classList.toggle('open');
  }


  let text;
  if (Math.random() < 0.5) {
    text = "<a href='https://juliaverweij.com/coffee.html'>Random Project!</a>";
  } else if (Math.random() < 1) {
    text = "<a href='https://juliaverweij.com/doors.html'>Random Project!</a>";
  }else {
    text = "<a href='https://juliaverweij.com/paperjam.html'>Random Project!</a>";
  }
  document.getElementById("demo").innerHTML = text;