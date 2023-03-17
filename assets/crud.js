$(document).ready(function(){

    let students = [];
    let html=''

    if (JSON.parse(localStorage.getItem("students")) != null) {
    
        students = JSON.parse(localStorage.getItem("students"))
    
    }
 
        $("button").click(function(e){
            e.preventDefault();

            let stuName=$(this).parent().children().first().val();
            let stuSurname=$(this).parent().children().eq(3).val();
            let stuAge=$(this).prev().prev().prev().val();

            console.log(stuName);
            console.log(stuSurname);
            console.log(stuAge);

            let stu = {
                name:stuName,
                surname:stuSurname,
                age:stuAge
            }

            students.push(stu);
    
localStorage.setItem("students",JSON.stringify(students));

    
            html+= `
    <tr> 
    <td>${stu.name}</td>
    <td>${stu.surname}</td>
    <td>${stu.age}</td>
    <td><i class="fa-solid fa-trash icon"></i></td>
    `
   
$("tbody").html(html);

$(document).on("click",function(){
   $("tbody").remove(students)
})

    
});
});
    
// else{
//     tableBody.parentNode.classList.add("d-none");
//     productAlert.classList.remove("d-none")

// }

// if(products!=null){
//     getBasketCount(products);
// }



// function getBasketCount(arr){
//     let count=0;
//     for (const item of arr) {
//         count+=item.count;

//     }
//     document.querySelector("sup").innertext=count;

// }



     
            
//         })
//         localStorage.setItem("students",JSON.stringify(students))

            
    
    //           let productDesc=this.previousElementSibling.innerText
    
    //           let productImage=this.parentNode.previousElementSibling.getAttribute("src")
    
    //           let productName=this.parentNode.firstElemetChild.innerText;
        
    //           let productId=parseInt(this.closest(".card").getAttribute("data-id"))
    
    //          let existProduct=basket.find(m=>m.id==productId);
    
    //          if(existProduct!=undefined){
    //             existProduct.count+=1
    //          }
    //          else{
    //             basket.push({
    //                 name:productName,
    //                 description:productDesc,
    //                 image:productImage,
    //                 count:1,
    //                 id:productId
        
    //               })
    //          }
    
           
    
    //           localStorage.setItem("basket",JSON.stringify(basket))
          
    //           getBasketCount(basket);
    
    //           Swal.fire({
    //             position: 'top-center',
    //             icon: 'success',
    //             title: 'Your work has been saved',
    //             showConfirmButton: false,
    //             timer: 1500
    //           })

   
    
    
    // getBasketCount(basket);
    
    // function getBasketCount(arr){
    //     let count=0;
    //     for (const item of arr) {
    //         count+=item.count;
    
    //     }
    //     document.querySelector("sup").innerText=count;
    
    // }
    





