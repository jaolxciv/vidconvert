//DOWNLOAD BUTTONS
var botones = document.querySelectorAll(".download-btn");
botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    var url = boton.getAttribute("data-url");
    window.location.href = url;
  });
});
// DOWNLOAD BUTTONS

// SCROLL UP BUTTON
  const topScrollBtn = document.querySelector(".top-scroll-btn");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {                      //si se hace un scroll vertical (Y) mayor que 100px, agregar clase show
      topScrollBtn.classList.add("show");
    } else {
      topScrollBtn.classList.remove("show");
    }
  });

  topScrollBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
//SCROLL UP BUTTON


//BOTON VIEJO QUE DABA ERROR
// console.log("hola")
// document.querySelectorAll(".dropdown-button").forEach(button => {
//     console.log(button)
//     button.addEventListener("click", function() {
//         const dropdownContent = this.nextElementSibling;
//         dropdownContent.classList.toggle("show");
//         dropdownContent.style.maxHeight = dropdownContent.classList.contains("show") 
//         console.log(dropdownContent)
//         ? dropdownContent.scrollHeight + "px" 
//             : null;
//     });
// });