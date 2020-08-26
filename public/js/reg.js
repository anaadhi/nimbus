var x = 1;
document.getElementById('email').addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
   event.preventDefault();
   console.log("f");
   if(x = 1){
   document.getElementById('pass').style.display = "inline";
   document.getElementById('pass').style.animation = "fadein 0.4s forwards ease-in";
   document.getElementById('email').style.animation = "fadeout 0.4s forwards ease-in";
   document.getElementById('next').style.display ="none";
   document.getElementById('next2').style.display ="inline-block";
   };
    x = x + 1;
  }
});

document.getElementById('pass').addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
   event.preventDefault();
   console.log("e");
   if(x = 2){
    document.getElementById('pass2').style.display = "inline";
    document.getElementById('pass2').style.animation = "fadein 0.4s forwards ease-in";
    document.getElementById('pass').style.animation = "fadeout 0.4s forwards ease-in";
    document.getElementById('next2').style.display ="none";
    document.getElementById('submit').style.display ="inline-block";
   };

  }
});
function nextt(){
  if(x = 1){
    document.getElementById('pass').style.display = "inline";
    document.getElementById('pass').style.animation = "fadein 0.4s forwards ease-in";
    document.getElementById('email').style.animation = "fadeout 0.4s forwards ease-in";
    document.getElementById('next').style.display ="none";
    document.getElementById('next2').style.display ="inline-block";
    
    };
     x = x + 1;
}
function nextt2(){
  if(x = 2){
    document.getElementById('pass2').style.display = "inline";
    document.getElementById('pass2').style.animation = "fadein 0.4s forwards ease-in";
    document.getElementById('pass').style.animation = "fadeout 0.4s forwards ease-in";
    document.getElementById('next2').style.display ="none";
    document.getElementById('submit').style.display ="inline-block";
   };
}

$("input[type='text'], textarea").on("keyup", function(){
  if($(this).val() != "" && $("textarea").val() != "" && $("input[name='category']").is(":checked") == true){
      $("input[type='submit']").removeAttr("disabled");
  } else {
      $("input[type='submit']").attr("disabled", "disabled");
  }
});

$("input[name='category']").on("change", function(){
  if($(this).val() != "" && $("textarea").val() != "" && $("input[name='category']").is(":checked") == true){
      $("input[type='submit']").removeAttr("disabled");
  } else {
      $("input[type='submit']").attr("disabled", "disabled");
  }
});