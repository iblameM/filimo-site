let number = document.getElementById("tel")
let button = document.getElementById("s-b")
button.disabled = true
function check(params) {
    let num = number.value
    if (num = "") {
        button.disabled = true
    } else {
        button.disabled = false
    }
}
setInterval(check, 2); 