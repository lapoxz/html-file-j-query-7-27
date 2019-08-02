$(document).ready(function(){

$("#box1").keydown(function(){
        let size = document.getElementById('box1').value.length;

        if (size < 7){
          $(".msg").text("username must be 8 characters");
        }
        else {
        $(".msg").text("");
        }

})
})