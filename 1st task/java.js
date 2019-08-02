$(document).ready(function(){
    $("h1").click(function (){
        $("p").toggle();
    }),

    $("#btn1").click(function(){
            $("#box1").toggle("slow");

    }),

     $("#input1").focus(function(){
     $(this).addClass("bg-blue")
 
     }),

     $("#input1").blur(function(){
    $(this).removeClass("bg-blue")

     }),

     $("#input2").focus(function(){
        $(this).addClass("bg-blue")
    
    }),
   
        $("#input2").blur(function(){
       $(this).removeClass("bg-blue")
   
     }),



     $("#btn2").click(function(){
        $("#box2").fadeToggle("slow");

     }),

     $("a").hover(function(){
         $(this).toggleClass("bg-blue");
     })

/*
        $("#boxes1").slideDown(2000,function(){
        $("#boxes2").slideDown(2000, function(){
        $("#boxes3").slideDown(2000, function(){
        $("#boxes4").slideDown(2000, function(){
        $("#boxes5").slideDown(2000,)
        })    
        })
        })
     })*/

     $("#boxes1").fadeIn("slow");
     $("#boxes2").delay(400).fadeIn("slow");
     $("#boxes3").delay(800).fadeIn("slow");
     $("#boxes4").delay(1200).fadeIn("slow");
     $("#boxes5").delay(1600).fadeIn("slow");




})