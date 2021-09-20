const nav = document.querySelector(".nav-container");

if (nav) {
  const toggle = nav.querySelector(".nav-toggle");
  
  if (toggle) {
    toggle.addEventListener("click", () => {
      if (nav.classList.contains("is-active")) {
        nav.classList.remove("is-active");
      }
      else {
        nav.classList.add("is-active");
      }
    });
    
    nav.addEventListener("blur", () => {
      nav.classList.remove("is-active");
    });
  }
}



function scrollTo(element) {
window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
});
}

document.getElementById("Education-link").addEventListener('click', () => {
scrollTo(document.getElementById("Education"));
});

document.getElementById("Skills-link").addEventListener('click', () => {
scrollTo(document.getElementById("Skills"));
});

document.getElementById("Contact-link").addEventListener('click', () => {
scrollTo(document.getElementById("Contact"));
}); 