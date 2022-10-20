let wingsImage = document.querySelector(".wings");
container.onmouseover = container.onmouseout = handler;

function handler(event) {

  
  if (event.type == 'mouseout') {
    wingsImage.classList.add("stop");
    wingsImage.style.animationPlayState = `paused`;
  }
  
  if (event.type == 'mouseover') {
    wingsImage.style.animationDuration = `2s`;
    wingsImage.style.animationPlayState = `running`;
  }
}
