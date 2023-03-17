$(document).ready(function(){
        $(".open").click(function(){
                $(".sidebar").removeClass("hide")
                $(this).addClass("d-none")
                $(".close").removeClass("d-none")
        })
        $(".close").click(function(){
                $(".sidebar").addClass("hide")
                $(this).addClass("d-none")
                $(".open").removeClass("d-none")
        })
     



  });



