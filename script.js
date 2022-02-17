document.querySelector(".burger").addEventListener("click", () => {
   document.querySelector(".burger").classList.toggle("active");
   document.querySelector(".nav__list").classList.toggle("active");
   document.body.classList.toggle("lock");
})

document.querySelectorAll(".nav__link").forEach(link => {
   link.addEventListener("click", () => {
      if (document.querySelector(".nav__list").classList.contains("active")) {
         document.querySelector(".nav__list").classList.remove("active");
         document.querySelector(".burger").classList.remove("active");
         document.body.classList.remove("lock");
      }
   })
})