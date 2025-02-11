let question = document.getElementById("question");
let eachq = document.getElementById("each-q");
let eachq2 = document.getElementById("each-q2")
let question2 = document.getElementById("question2")
let h3q = document.getElementById("h3q");
let question3 = document.getElementById("question3")
let eachq3 = document.getElementById("each-q3")
let question4 = document.getElementById("question4")
let eachq4 = document.getElementById("each-q4")
eachq.style.height = "33px"
eachq2.style.height = "33px"
question.style.opacity = 0;
question.style.visibility = "hidden"
question2.style.opacity = 0;
question2.style.visibility = "hidden"
question3.style.opacity = 0;
question3.style.visibility = "hidden"
question4.style.opacity = 0;
question4.style.visibility = "hidden"
let counter = 2;
let counter2 = 2;
let counter3 = 2;
let counter4 = 2;
function qf1() {
    counter++;
    if (counter %2 == 0) {
        question.style.opacity = 0;
        question.style.visibility = "hidden"
        eachq.style.height = "33px"
        h3q.style.color = "white"
    } else {
        question.style.opacity = 1;
        question.style.visibility = "visible"
        eachq.style.height = "92px"
        h3q.style.color = "#f48440"
    }
}
function qf2(params) {
    counter2++;
    if (counter2%2==0) {
        question2.style.opacity = 0;
        question2.style.visibility = "hidden"
        eachq2.style.height = "33px"
        h3q2.style.color = "white"
    } else {
        question2.style.opacity = 1;
        question2.style.visibility = "visible"
        eachq2.style.height = "60px"
        h3q2.style.color = "#f48440"
    }
}
function qf3(params) {
    counter3++;
    if (counter3%2==0) {
        question3.style.opacity = 0;
        question3.style.visibility = "hidden"
        eachq3.style.height = "33px"
        h3q3.style.color = "white"
    } else {
        question3.style.opacity = 1;
        question3.style.visibility = "visible"
        eachq3.style.height = "85px"
        h3q3.style.color = "#f48440"
    }
}
function qf4(params) {
    counter4++;
    if (counter4%2==0) {
        question4.style.opacity = 0;
        question4.style.visibility = "hidden"
        eachq4.style.height = "33px"
        h3q4.style.color = "white"
    } else {
        question4.style.opacity = 1;
        question4.style.visibility = "visible"
        eachq4.style.height = "85px"
        h3q4.style.color = "#f48440"
    }
}