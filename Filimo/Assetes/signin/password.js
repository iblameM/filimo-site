let button = document.getElementById("s-b")
let password = document.getElementById("password")
var letter = /[a-z]/;
var number = /[0-9]/;
button.disabled = true
function test() {
    let p = password.value
    if(p.length < 3 || !letter.test(p) || !number.test(p) ) {
        if(p.length<3){
        button.style.backgroundColor = "#6acc9b"
        button.disabled = true
        }
        if(!letter.test(p) || !number.test(p)){
            button.style.backgroundColor = "#6acc9b"
            button.disabled = true
        }
    }
    else{
        button.style.backgroundColor = "#1bb561"
        button.disabled = false
        button.style.cursor = "pointer"
    }
}
setInterval(test, 2); 