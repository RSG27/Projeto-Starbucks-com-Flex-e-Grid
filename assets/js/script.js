function upScreen() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function dissapearingButton() {
  /* Desaparece o botão quando o scroll está no inicio  da página*/ 
  if(window.scrollY == 0) {
    document.querySelector('.scrollbutton').style.display = 'none';
  } else {
    document.querySelector('.scrollbutton').style.display = 'block';
  }
}

window.addEventListener('scroll', dissapearingButton);

window.onload = function() {
  document.querySelector(".menu-opener").addEventListener("click", function() {
      if (document.querySelector(".menu nav").style.display == 'flex') {
          document.querySelector(".menu nav").style.display = 'none';
      } else {
          document.querySelector(".menu nav").style.display = 'flex';
      }
  });
};
