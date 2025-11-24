
var  btn = document.getElementById('btn');

var userName = nameInput.value;
var passwrd = passswordInput.value;
var password = passwrd.toLowerCase();
var symbol = ["@", "#", "$", "%", "!", "*", "?", "_", "-"];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


if (userName === "" || userName === " ") {
    alert('please fill the required fields')
}
else if (password.length < 8) {
    alert('password should be atleast 8 characters long')
}
var hasSymbol= false;
for (var i = 0; i < password.length; i++) {
    for (var j = 0; j < symbol.length; j++) {
        if (symbol[j] === password[i]) {
            hasSymbol= true;
             break
        }
        
        
    }
}
if(hasSymbol ===false){
     alert(`please enter aleast 1 symbol`)
}
var hasLetters= false;
for (var i = 0; i < password.length; i++) {
    for (var j = 0; j < letters.length; j++) {
        if (letters[j] === password[i]) {
            hasLetters = true;

             break
        }
       

    }
}
if(hasLetters ===false){
     alert(`please enter aleast 1 letter`)
}
btn.addEventListener('click', function submit (){
    var nameInput = document.getElementById('name');
    var passswordInput = document.getElementById('password');
    alert(
       ` your form has been successfully submitted`
    
    )
})