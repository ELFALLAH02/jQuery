function valid_form(){
  var name_val=$("#name_x").val();
  var last_val=$("#last_x").val();
  var email_val=$("#email_x").val();
  var pass_val=$("#pass_x").val();
  var pass_c_val=$("#pass_c_x").val();
  var name_val=$("#name_x").val();
  var exp=/^[a-zA-Z0-9._-]+@[a-z0-9]+\.[a-z]{2,4}$/;
  var exp_pass=/^[a-zA-Z0-9]{9}$/;
  var exp_number=/^[0-9]+$/;
  if(name_val.length==0){
  
    var dd =$("#name_v").text("This input is required to fill")
    dd.css("color","red");
  }
  else{
    $("#name_x").css("outline" ,"3px solid green")
    $("#name_v").text("")
  }
  if(last_val.length==0){
  
    var d = $("#last_v").text("This input is required to fill")
    d.css("color","red");
  }
  else{
    $("#last_x").css("outline" ,"3px solid green")
    $("#last_v").text("")
  }
  //////////start of email validtion//////////
if(email_val.length==0){
    var gh =$("#email_v").text("This input is required to fill")
    gh.css("color","red");
 }
 else{
  if(!exp.test(email_val)){
    $("#email_v").text("enter a valid email");
    
  }
   else{
    $("#email_x").css("outline" ,"3px solid green")
         $("#email_v").text("");
   } 
 }
  //////////////end of email validtion ///////////////
  
 ////////////////////
 if(pass_val.length==0){
  
  var pas =$("#password_v").text("This input is required to fill")
  pas.css("color","red");
}
else{
  if(!exp_pass.test(pass_val)){
    $("#password_v").text("enter a valid password");
  }
  else{
    $("#pass_x").css("outline" ,"3px solid green")
    $("#password_v").text("")
  }
 
}
///////////////////
if(pass_c_val.length==0){
  
  var pas =$("#password_g_v").text("This input is required to fill")
  pas.css("color","red");
}
else{
  if(!exp_pass.test(pass_c_val)){
    $("#password_g_x").text("enter a valid password");
  }
  else{
    
    $("#password_g_v").text("")
  }
 
  if(pass_val==pass_c_val){
    $("#pass_c_x").css("outline" ,"3px solid green")
    $("#password_g_v").text("")
  }
  else{
     var same = $("#password_g_v").text("The password is not the same")
    same.css("color","red");
  
  }
 }
 
}






 