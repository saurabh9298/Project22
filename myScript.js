function openCity(formIDName) {
  var i;
  var x = document.getElementsByClassName("ok");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  document.getElementById(formIDName).style.display = "block"; 
}

function increase(bID){

    document.getElementById(bID).style.color="red";
}
function decrease(bID){

    document.getElementById(bID).style.color="";
}


function goto1(){
    
    var username=document.getElementById("text1");
    var password=document.getElementById("text2");
    if(username.value.trim()==""){
        alert("enter username");
        return false;
    }
    else if(password.value.trim()==""){
        alert("Enter valid password");
        return false;
    }
    else if(password.value.trim().length<5){
        alert("Password length should be > 4");
        return false;
    }
    else{
        return true;
    }
}


function goto2(){
    var title=document.getElementById("text9");
    var firstname=document.getElementById("text10");
    var lastname=document.getElementById("text3");
    var company=document.getElementById("text4");
    var street=document.getElementById("text5");
    var addInfo=document.getElementById("text6");
    var country=document.getElementById("text7");
    var contact=document.getElementById("text8");

    if(title.value.trim()==""){
        alert("Enter title");
        return false;
    }
    else if(firstname.value.trim()==""){
        alert("Enter valid First Name");
        return false;
    }
    else if(lastname.value.trim()==""){
        alert("Enter valid Last Name");
        return false;
    }
    else if(company.value.trim()==""){
        alert("Enter company Name");
        return false;
    }
    else if(street.value.trim()==""){
        alert("Enter address");
        return false;
    }
    else if(country.value.trim().length<5){
        alert("Enter country name");
        return false;
    }
    else if(contact.value.trim()==""){
        alert("Enter valid contact no.");
        return false;
    }
    else{
        return true;
    }
  

}


function goto3(){
    var fname=document.getElementById("text11");
    var lname=document.getElementById("text12");
    var c=document.getElementById("text13");
    var mail=document.getElementById("text14");
    var code=document.getElementById("text15");
    var phone=document.getElementById("text16");
    var subject=document.getElementById("text17");
    var rd1=document.getElementById("text18");
    var rd2=document.getElementById("text19");

  
    if(fname.value.trim()==""){
        alert("Enter valid First Name");
        return false;
    }
    else if(lname.value.trim()==""){
        alert("Enter valid Last Name");
        return false;
    }
    else if(c.value.trim()==""){
        alert("Enter company Name");
        return false;
    }
    else if(mail.value.trim()==""){
        alert("Enter email");
        return false;
    }
    else if(code.value.trim()==""){
        alert("Enter area code");
        return false;
    }
    else if(phone.value.trim()==""){
        alert("Enter valid contact no.");
        return false;
    }
    else if(rd1.checked==false && rd2.checked==false){
        alert("select radio button");
        return false;
    }
    else{
        return true;
    }
  

}
