// scripts.js

document.addEventListener("DOMContentLoaded",function(){
  const track = document.querySelector(".carousel-track");
  let idx=0;
  const slides = [...track.children];
  setInterval(() => {
    idx = (idx+1)%slides.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
  },3000);

  document.querySelectorAll(".accordion .header").forEach(h=>{
    h.addEventListener("click", ()=>{
      const panel = h.nextElementSibling;
      panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
    });
  });
});
