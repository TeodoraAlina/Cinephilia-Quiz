/*jshint esversion: 6 */

// Getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeOver = quiz_box.querySelector(".timer .time_left_txt");

const option_list = document.querySelector(".option_list");

/**
 * If Take Quiz button clicked
 * Show Info Box
 * Hide homepage
 */
start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
  document.getElementById("hero").style.display = "none";
};

/**
 * If exitQuiz button clicked
 * hide Info Box
 */
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  document.getElementById("hero").style.display = "block";
};

/**
 * If continueQuiz button clicked
 * hide Info Box
 * show Quiz Box
 */
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuestions(0);
  queCounter(1); // Pass one parameter to queCounter
  startTimer(20); // Call startTimer function
};

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
 * When restartButton is clicked
 * Show quiz box
 * Hide result box
 */
restart_quiz.onclick = () => {
  result_box.classList.remove("activeResult");
  result_box.classList.add("activeQuiz");
  que_count = 0;
  que_numb = 1;
  timeValue = 20;
  userScore = 0;
  showQuestions(que_count); // Call showQuestions function
  queCounter(que_numb); // Pass que_numb value to queCounter
  clearInterval(counter); // Clear counter
  startTimer(timeValue); // Call startTimer function
  next_btn.style.display = "none"; // Hide next button
  timeOver.textContent = "Time Left"; // Change the text of timeOver
  document.getElementById("hero").style.display = "block"; // Show homepage
};

/**
 * When quitQuiz button is clicked
 * Reload the current window
 */
quit_quiz.onclick = () => {
  window.location.reload();
};

/**
 * When next button is clicked
 * If question count is less than total question length
 * increment the que_count value
 * increment the que_numb value
 */
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count); // Call showQuestions function
    queCounter(que_numb); // Pass que_numb value to queCounter
    clearInterval(counter); // Clear counter
    startTimer(timeValue); // Call startTimer function
    next_btn.style.display = "none"; // Hide the next button
    timeOver.textContent = "Time Left"; // Change the timeText to timeOver
  } else {
    clearInterval(counter); // Clear counter
    showResultBox(); // Call showResultBox function
  }
};

/**
 * Get questions and options from array
 * Create a new span and div tag for question and option
 * Pass the value using array index
 */
function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option">' +
    questions[index].options[0] +
    "<span></span></div>" +
    '<div class="option">' +
    questions[index].options[1] +
    "<span></span></div>" +
    '<div class="option">' +
    questions[index].options[2] +
    "<span></span></div>" +
    '<div class="option">' +
    questions[index].options[3] +
    "<span></span></div>";
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

// Create the new div tags for icons

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

/**
 * Get user selected option
 * Get correct answers from array
 * Get all options items
 */
function optionSelected(answer) {
  clearInterval(counter);
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;
  if (userAns == correctAns) {
    //If user selected option is equal to array's correct answer
    userScore += 1;
    answer.classList.add("correct"); // Add green to correct answer
    answer.insertAdjacentHTML("beforeend", tickIcon);
  } else {
    answer.classList.add("incorrect"); // Add red to incorrect answer
    answer.insertAdjacentHTML("beforeend", crossIcon);

    // If answer is incorrect then select the correct answer
    for (let i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correctAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); // Disable all options if user selected an option
  }
  next_btn.style.display = "block";
}

/**
 * When Quiz has finished
 * Hide the info box
 * Hide the quiz box
 * Show the result box
 */
function showResultBox() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 6) {
    // If user scored more than 6
    // Create a new span tag and passing the user score number and total question number
    let scoreTag =
      "<span>You are one true cinephile! You got <p>" +
      userScore +
      "</p> out of<p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; // Add new span tag inside score_Text
  } else if (userScore > 4) {
    // If user scored more than 4
    let scoreTag =
      "<span>Nice! You got <p>" +
      userScore +
      "</p> out of<p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // If user scored less than 4
    let scoreTag =
      "<span> So sorry! You only got <p>" +
      userScore +
      "</p> out of<p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; // Change the value of timeCount with time value
    time--; // Decrement the time value
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = "00";
      timeOver.textContent = "Time Over";

      let correctAns = questions[que_count].answer;
      let allOptions = option_list.children.length;

      for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //disable all options if user selected an option
      }
      next_btn.style.display = "block"; // Show the next button if user selected any option

      for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correctAns) {
          // If there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); // Add green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); // Add tick icon to matched option
        }
      }
    }
  }
}

/**
 * Pass the question number and total question
 * Add a new span tag inside bottom_que_counter
 */
function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector(".total_que");
  let totalQuesCountTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}
