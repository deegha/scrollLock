

function mainFunction() {
  const ANIMATION_TIME = 600; 
  const body = document.querySelector("body");
  const noSections = document.querySelectorAll("section").length;
  body.style.overflowY = "hidden"; 

  let scrolling = true;
  let initialScroll = window.scrollY;
  let currentSection = 1;
  let main = null;
  let next = null;

  window.onscroll = (e) => {
    
    if (scrolling) {
      const scrollDown = window.scrollY >= initialScroll;
      const scrollLimit = currentSection >= 1 && currentSection <= noSections;
      if (scrollLimit) {
        
        if (scrollDown && currentSection < noSections) {
          main = document.querySelector(`section.s${currentSection}`);
          next = document.querySelector(`section.s${currentSection + 1}`);
          main.style.transform = "translateY(-100vh)";
          next.style.transform = "translateY(0)";
          currentSection++;
        } else if (!scrollDown && currentSection > 1) {
          main = document.querySelector(`section.s${currentSection - 1}`);
          next = document.querySelector(`section.s${currentSection}`);
          main.style.transform = "translateY(0)";
          next.style.transform = "translateY(100vh)";
          currentSection--;
        }
      }
      setTimeout(() => {
        initialScroll = window.scrollY;
        scrolling = true;
        body.style.overflowY = "scroll";
      }, ANIMATION_TIME);
      scrolling = false;
    }
    
    window.scroll(0, window.screen.height);
  };
}

document.addEventListener("DOMContentLoaded", function(event) { 
  console.log("dsfsdfsd")
  mainFunction()
});