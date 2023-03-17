$(document).ready(function(){

// let elem=document.querySelector("h1")
// console.log(elem)


// let elem=$("h1");

//  elem.text("salamlar");

// console.log(elem.html())

// $(document).on("click",".hide",function(){
//     console.log("second")
// })

// $(".box").css("backgroundColor","red")

// $(".box").css({
//     "backgroundColor":"red",
//     // "margin-left":"150px"
// })


  



// $(".hide").click(function(){
//     // $(this).hide();
//     $(".box").slideUp(1000)
// })


// $(".show").click(function(){
//     $(".box").show(1000)
//      $(".box").css({
//    "backgroundColor":"red",
//     //   "margin-left":"150px"
//  })
//  $(".box").slideDown(2000)

// })


// $(".toggle").click(function(){
//     $(".box").slideToggle(1000)
// })

// $(".hide").click(function(){
//     // $(this).hide();
//     $(".box").fadeOut(1000)
// })


// $(".show").click(function(){
//     $(".box").show(1000)
//      $(".box").css({
//    "backgroundColor":"red",
//     //   "margin-left":"150px"
//  })
//  $(".box").fadeIn(2000)

// })


// $(".toggle").click(function(){
//     $(".box").fadeToggle(1000)
// })


// $(".show").click(function(){
//     $(".box").animate({left: '250px'});
//     $(".box").animate({height: 'toggle'});

// })

// $(".hide").click(function(){
//     $(".box").animate({left: '0px'});

// })


// $(document).on("click","button",function(){
//     console.log($("input").val());
    // $("input").val("");
    // let elemInput=$("input");
    // console.log(elemInput.value)

// })

// let elems=document.querySelectorAll("button");
// elems.forEach(el => {
//     el.addEventListener("click",function(){
//         alert(this.innerText)
//     })
// });


// $("button").click(function(){
//     alert($(this).text())
// })

// $("input").attr("type","number")


// $("button").click(function(){
// // $("input").val()

// if($("input").val("")!=""){
//     let li=` <li class="list-group-item">${$("input").val()}</li>`
//     $("ul").append(li)
//     $("input").val("")
// }


// })
// $("li").click(function(){
//     alert("test")
// })


// $(document).on("click","li",function(){
    // $("li").click(function(){
    //     alert("test")
    // })

//     $(this).remove();
    
// })




// $("button").click(function(){

// $("ul").addClass("d-none")
// $("ul").toggleClass("d-none")
// console.log($("ul").hasClass("d-none"))
    
//  })

 
// $("button").click(function(){
//     $("ul").prepend(`<li class="list-group-item">Resul</li>`)
//     $("ul").append(`<li class="list-group-item">Resul</li>`)
//     $("ul").after(`<li class="list-group-item">Resul</li>`)
//     $("ul").before(`<li class="list-group-item">Resul</li>`)


//   $("ul").empty();
//   $("ul").remove();


// })



// $("button").click(function(){

//     if($(".box").width()>=800){
//         return;
//     }

//     let nativeWidth=$(".box").width();

//     let result=(nativeWidth*2)+"px";

//     $(".box").width()=result
// })

console.log($("a").parent())

console.log($("a").parents())

console.log($("a").parentsUntil(".test"))

console.log($("ul").children())

console.log($("ul").children().eq(0).text())

console.log($("ul").find(".resul").text())

console.log($(".resul").siblings())

console.log($(".resul").next().text())

console.log($(".resul").prev().text())

console.log($(".resul").nextAll())

console.log($(".resul").prevUntil("span"))

$(".resul").prevUntil("span").click(function(){
    alert("salam")
})







})