$(document).ready(function(){
    $('button').click(function(){
    let uname = $("#user").val();
    let pwd = $("#pass").val();
    validateLogin(uname,pwd,function(f){
        if(f==1){
        window.location.href = "index.html";
        }
        else{
        alert("The username and password does not match");
        }
    });
});
});

function validateLogin(u,p,c)
{
var flag=0;
if(u=="admin" && p=="1234")
flag=1;
else
flag=0;
c(flag);
}
