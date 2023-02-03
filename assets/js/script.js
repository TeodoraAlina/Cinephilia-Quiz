// Getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");


/** 
 * If Take Quiz button clicked
 * show Info Box
 */
start_btn.onclick = ()=>{
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
}