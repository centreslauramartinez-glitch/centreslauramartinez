
(function(){
const panel=document.getElementById("mobilePanel");
const buttons=document.querySelectorAll(".mobile-menu,.nav-right .menu-button");
buttons.forEach(button=>button.addEventListener("click",()=>{const open=panel.classList.toggle("open");buttons.forEach(b=>b.setAttribute("aria-expanded",open?"true":"false"));}));
panel.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{panel.classList.remove("open");buttons.forEach(b=>b.setAttribute("aria-expanded","false"));}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});
document.documentElement.classList.add("js");
document.querySelectorAll(".reveal:not(.visible)").forEach(el=>observer.observe(el));
})();
