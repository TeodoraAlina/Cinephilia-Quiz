// Getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec")

const option_list = document.querySelector(".option_list");


/** 
 * If Take Quiz button clicked
 * show Info Box
 */
start_btn.onclick= ()=>{
    info_box.classList.add("activeInfo");
}

/**
 * If exitQuiz button clicked
 * hide Info Box
 */
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

/**
 * If continueQuiz button clicked
 * hide Info Box
 * show Quiz Box
 */
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(20);
}

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 20;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

/**
 * If Next Button Clicked
 */
next_btn.onclick =()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        next_btn.style.display = "none";
    }else {
        console.log("Questions completed");
        showResultBox();
    }
        
}

/**
 * Getting questions and options from array
 */
function showQuestions(index) {
const que_text = document.querySelector(".que_text");
let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
let option_tag = '<div class="option">' + questions[index].options[0] +'<span></span></div>'
                 + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                 + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                 + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
que_text.innerHTML = que_tag;
option_list.innerHTML = option_tag;

const option = option_list.querySelectorAll(".option");
for (let i= 0; i < option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)");
}
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>'
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>'

/**
 * Getting user selected option
 * getting correct answers from array
 * getting all options items 
 */
function optionSelected(answer) {
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){ //if user selected option is equal to array's correct answer
        userScore += 1; 
        console.log(userScore);
        answer.classList.add("correct"); //add green to correct answer
        console.log('Answer is Correct!');
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else {
        answer.classList.add("incorrect"); // add red to incorrect answer
        console.log('Answer is Incorrect!');
        answer.insertAdjacentHTML("beforeend", crossIcon)
        
        // If answer is incorrect then select the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    for(let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //disable all options if user selected an option
    }
    next_btn.style.display = "block";
    
};

function showResultBox(){
    info_box.classList.remove("activeInfo");  // hide the info box
    quiz_box.classList.remove("activeQuiz"); // hide the quiz box
    result_box.classList.add("activeResult"); // show the result box
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}



/**
 * Passing the question number and total question
 * Adding a new span tag inside bottom_que_counter
 */
function queCounter(index){
const bottom_ques_counter = quiz_box.querySelector(".total_que");
let totalQuesCountTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
bottom_ques_counter.innerHTML = totalQuesCountTag;
}