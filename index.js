var alertbox = document.querySelector(".alertbox")

btn.onclick = function getPassword(){


var char = "0123456789qwertyuiop?><:{}!@#$%^&*()_+qwertyuiop[];lkjhgfdsazxcvbnm,./QWERTYUIOPLKJHGFDSAZXCVBNM";
 var passlength = 16;
  var password = "";

    for(var i=0; i<passlength; i++){

        var randomnum = Math.floor(Math.random() * char.length);
       password += char.substring(randomnum,randomnum+1);
       
    }

    document.getElementById('password').value = password;
    alertbox.innerHTML = "New Passowrd Copied: <br>" + password;
}



 copy.onclick =function copypassword(){

var cpypasstxt = document.getElementById('password');

cpypasstxt.select();
cpypasstxt.setSelectionRange(0,9999);
document.execCommand("copy");
alertbox.classList.toggle('active')


setTimeout(function(){

    alertbox.classList.toggle('active')


},1000)

}
