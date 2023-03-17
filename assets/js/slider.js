$(document).ready(function () {

   $(".right").click(function () {
      if ($(".active-img").next().length != 0) {

         let actImg = $(".active-img");
         $(".active-img").next().addClass("active-img");
         actImg.removeClass("active-img");
      }
      else {
         $(".active-img").addClass("active-img");
      }


   })
   $(".left").click(function () {
let actImg = $(".active-img");  
      if ((actImg).next().lenght!=0) {     
         (actImg).next().addClass("active-img");
      
      } 
      else {
         $(".active-img").addClass("active-img");
        
      }

   })





})




// function leftSlider() {
//    let activeImage = document.querySelector(".active-img")
//    activeImage.classList.remove("active-img")
//    if (activeImage.previousElementSibling != null) {
//       activeImage.previousElementSibling.classList.add("active-img")
//    }
//    else {
//       activeImage.parentNode.lastElementChild.classList.add("active-img")
//    }

// }


// let buttons = document.querySelectorAll(".lines button")

// let images = document.querySelectorAll(".images")



//  buttons.forEach(button => {
//     button.addEventListener("click", function () {
//        (document.querySelector(".active-img")).classList.remove("active-img")
//        this.classList.add("active-img");
//        images.forEach(image => {
//           if (this.getAttribute("data-id") == image.getAttribute("data-id")) {
//              image.classList.remove("d-none")
//           }
//           else {
//              image.classList.add("d-none")
//           }
//        })

//    })

//  })




// rightIcon.addEventListener("click", rightSlider);


// leftIcon.addEventListener("click", leftSlider);






// rightIcon.addEventListener("mouseover", rightSlider);



// leftIcon.addEventListener("mouseover", leftSlider);