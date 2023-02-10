# Cinephilia Quiz
## Milestone Project Two

Cinephilia is an online quiz game made for people that have a special kind of love for movies. The user has 10 questions with 4 different options to choose from. The user has only 20 seconds to answer each question. The time is shown in the upper right corner of the quiz. If time has passed then the correct answer will automatically be selected. If the option selected was wrong, then the correct option will be shown as well. A question counter is shown in the bottom left corner of the quiz so that the user can find out how many questions are left. In the end of the quiz, the score of the user will appear. The user has the option to replay or to quit the quiz.
***

## Demo 

You can view the live website here - [Cinephilia Quiz](https://teodoraalina.github.io/cinephilia-quiz)

You can view the GitHub repository here - [TeodoraAlina/cinephilia-quiz](https://github.com/TeodoraAlina/cinephilia-quiz)

![Responsive Quiz](readme-images/cinephilia-quiz-responsive.png)
***

## User Experience (UX)

### Strategy

### User Stories

As a user I want to be able to :
* Easily determine the purpose of the website.
* Enter the quiz without any problem.
* Understand each question.
* See how many questions I have left.
* See a timer to indicate how much time is left to enter an answer.
* Get feedback on whether or not the correct answer has been entered.
* See the correct answer if the option choosen was incorrect.
* At the end of the game, get feedback on score.
* Navigate easily between the game screens.

## Structure

 The game will consist of :
  * A homepage which will contain the title of the quiz, a message to intrigue the user and a button which will present the user with the rules of the quiz.
  * An info box with the rules of the game, a button to continue to the quiz game and a button to exit.
  * A quiz box that will contain the questions and answer, a timer and a next button.
  * A score box containing the score of the user, a button to replay the quiz and a button to quit the quiz.

## Skeleton
* Desktop Wireframes - [Homepage](readme-images/quiz-homepage-desktop.png)/[Rules](readme-images/quiz-rules-desktop.png)/[Quiz](readme-images/quiz-box-desktop.png)/[Result](readme-images/quiz-result-desktop.png),


* Mobile Wireframes - [Homepage](readme-images/quiz-homepage-mobile.png)/[Rules](readme-images/quiz-rules-mobile.png)/ [Quiz](readme-images/quiz-box-mobilie.png)/[Result](readme-images/quiz-result-mobile.png)


## Surface

### Colour
Three primary colours were used on the website. #F0FFFA was used for the background for the contrast. #a0785a was used for the background of the boxes, #257889 was used for the fonts. The pallete was taken from [Coolors](https://coolors.co/).

### Typography
[Google Fonts](https://fonts.google.com/) were used to import the "Lora" and "Poppins" fonts. "Lora" was used for the headers and "Poppins" for the content. The fonts were chosen because they work very well together and for the redability.


### Call to Action
* The "Take the Quiz" button sends the user to the Rules of the quiz, from where you can exit the quiz or continue.
* The "Continue" button opens the quiz game for the user.
* The "Next" button gets the user to the next question until the questions are finished.
*  The buttons have a nice Malachite green color that goes perfectly with the Light mint color but also with the earthy brown. The colors of the buttons switch when hovered over.
* When hovered over them, the options are highlighted with the mint color for the background and the Malachite green for the border, the text color goes from light mint to the Malachite green.
* When the option selected is correct, the option turns to green and a check icon appears in the right side.
* When the option selected is incorrect, the option turns to red and a "x" icon appears in the right side.
* If no option is selected when the time is over, the correct answer will appear highlighted with green colors as well as the check icon.
* When the quiz is completed, the result appears for the user to see. Three different messages are provided for different scores. Two buttons are provided: the "Replay Quiz" button and the "Quit Quiz" button, that give the user the chance to replay the quiz or quit it.

### Features to Implement in future
* The user to be able to enter a username.
* A score board at the and of the quiz.
* Random questions - to make the quiz more interactive.
***

# Technologies Used
* HTML5 - Mark-up language using semantic structure.
* CSS3 - Cascading style sheet used for styling.
* Gitpod.io - For writing the code, using the command line for commiting and pushing to GitHub.
* GitHub - Used to host the repository.
* Git - Used for version control of the project.

* [Google fonts](https://fonts.google.com/) - For styling the typography.
* [Balsamiq wireframe](https://balsamiq.cloud/) - To build wireframes in the design phase.
* [Font Awesome](https://fontawesome.com/) - For the icon presented next to the title, the icons used for the correct and incorrect answer and for the favicon.
* [Beautifier](https://beautifier.io) - To beautify HTML and CSS code.
* [Prettier](https://prettier.io/) - To beautify Javascript code.
* [JsHint](https://jshint.com) - Testing validity of JavaScript.
* [HTML Validator](https://validator.w3.org/#validate_by_input) - Testing validity of HTML.
* [CSS Validator](https://jigsaw.w3.org/css-validator/) - Testing validity of CSS.
* [Am I Responsive](https://ui.dev/amiresponsive#) - Checking the responsive nature and creating the mock-ups provided.
* DEV Tools - Lighthouse.
***

## Testing

| Test Description  | Expected Outcome  | Actual Outcome  |  Re-Test |
|---|---|---|---|
| Testing the "Take the Quiz" button  | The button should direct the user to the rules of the quiz when pressed  | Passed  | Passed  |
| Testing the "Exit Quiz" button  | When pressed, the button should exit the quiz  | Passed  | Passed  |
| Testing the "Continue" button  | The button should direct the user to the quiz game when pressed  | Passed  | Passed  |
| Testing the Timer  | The timer should go from 20 second to 0 seconds and to stop when an option is clicked  | Passed  | Passed  |
| Testing the correct answer  | The colors of the correct answer should be green and have a check icon  | Passed  | Passed  |
| Testing the incorrect answer  | The colors of the incorrect answer should be red, have a "x" icon and the correct answer should appear as well  | Passed  | Passed  |
| Testing the questions counter  | The questions counter should count the questions answered from 1 to 10  | Passed  | Passed  |
| Testing the correct answer and timer  | When the time is over, the correct answer should appear  | Passed  | Passed  |
| Testing the "Next" button  | When clicked, the next question should appear until finished. When questions are completed, pressing the next button should show the results of the user  | Passed  | Passed |
| Testing the "Replay Quiz" button  | When pressed, the quiz should reload to the first page  | Failed - The quiz had errors when reloaded, adjusted code | Passed  |
| Testing the "Quit Quiz" button  | When pressed, the user should be redirected to the home page  | Passed  | Passed  |
| Hover effects  | The buttons and options should change colours when hovered over  | Passed  | Passed  |
| Responsiveness in mobile view  | The appearence should be appealing and have readability  | Failed - The quiz overflowed the screen, adjusted width and font size  | Passed  |



### Validator Testing

* HTML Validator
![HTML Validator](readme-images/html-validator.png)
* CSS Validator
![HTML Validator](readme-images/css-validator.png)
* Javascript Validator for script.js file
![script.js Validator](readme-images/script.js-validator.jpg)
* Javascript Validator for questions.js file
![questions.js Validator](readme-images/questions.js-validator.png)

The reason for the unused variable "questions" message is that the questions.js file holds the game data in a separate file to the rest of the site code.
Please note that when running this test I set an option so the test wouldn't give a false alert for ECMAScript 6 specific syntax.

### Performance Testing

I have tested using the Developer Tools Lighthouse for desktop and mobile:

### Desktop
![DevTools Desktop](readme-images/devtools-desktop.png)

### Mobile
![DevTools Mobile](readme-images/devtools-mobile.png)

### Browser Compatibility

I have tested my website on the following:
* Google Chrome Version 108.0.5359.71 (desktop and mobile);
* Safari (desktop and mobile);
* Mozila Firefox Version 109.0.1(desktop and mobile).

### OS Compatibility

Tested on iOS 16.3, macOS Monterey 12.6.3 and Android 11. Tested for responsiveness using Chrome DevTools.
***

## Bugs
* There was a bug with the questions counter not showing in the quiz. Fixed - corrected typo "1" instead of "i".
* Bug - When time has finished, it didn't stop at 00 but continued counting with negative numbers. Fixed it using clearInterval and changing the textContent.
* Bug - Options moving when hovered over. Fixed it using border-color instead of border at the hover effect.
* There was a bug with the quiz box not showing when clicking "Continue" button in the rules box. Fixed it using document.getElementById("").style.display = "block".
* When pressing Replay button at the end of the game, the quiz game is reloading but there were many bugs met. Fixed it using  window.location.reload();

## Known Bugs
There are no known bugs at the moment.
***

## Deployment

### Delpoying to GitHub Pages

The project was deployed with the following steps

* Log into GitHub;
* Click the "Settings" button in the menu above the Repository;
* Scroll down the Settings page to the "GitHub Pages" Section;
* Under "Source", click the dropdown called "None" and then select "Master Branch";
* The page will automatically refresh, and a link displaced. It may take some time for the link to show the website.
* If the page will not load go down to "template" under the "source" and select a template.
* Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.


### Forking

Forking the GitHub Repository

By forking the GitHub Repository, you can make a copy of the original repository in your own GitHub account. This means we can view or make changes without making the changes affecting the original.

* Log into GitHub and locate the GitHub Repository;
* At the top of the Repository there is a "Fork" button about the "Settings" button on the menu;
* You should now have a new copy of the original repository in your own GitHub account.

### Cloning
 
 Taken from GitHub's documentation on cloning, which can be found [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) :
 
* Once logged into GitHub, navigate to the repository you wish to clone.
* Next to the green Gitpod button there's a button that reads code, click this.
* To clone the repository using HTTPS, copy the link whilst HTTPS is selected.
* Open your local IDE of choice and open the terminal.
* Navigate to the working directory of where you want the cloned directory to be.
* Type ```git clone``` in the terminal and then paste the link that you selected in step 3. Press enter.
* The clone is created in your current working directory (```cwd```).

### Adding and commiting files

I’ve been using Gitpod to write my code and using the terminal within to add, commit and push code from my workspace to GitHub where it is stored remotely as shown in the course content.

* When I have made a couple of minor additions / changes or one large change or addition I add the file in question to the staging area by typing in the terminal git add . the full stop will add all new files.
* I now want to save my changes to the local repository by typing git commit –m “ ” into the terminal. Between the “ ” I'll write a concise message detailing what this commit has done.
* When I either want to upload all my changes for the day or view on GitHub Pages I push all the commits I’ve previously done to GitHub using the git push command. When GitHub Pages is set up for the repository in question it will automatically pick up these changes and display the most up to date version that has been pushed.
***

## Credit
### Acknowledgements
* Tutor support at Code Institute for their help when required.
* My mentor, Brian Macharia, for helping and guiding me through this project during the mentor sessions.
* [Code Institute SampleREADME](https://github.com/Code-Institute-Solutions/SampleREADME)
* [W3schools](https://www.w3schools.com) - for various code information.
* [Balsamiq wireframes](https://balsamiq.cloud/) - To build wireframes in the design phase.
* [Font Awesome](https://fontawesome.com/) - For the icon presented next to the title, the icons used for the correct and incorrect answer and for the favicon.
* [Beautifier](https://beautifier.io) - To beautify my code.
* [Prettier](https://prettier.io/) - To beautify Javascript code.
* [JsHint](https://jshint.com) - Testing validity of JavaScript.
* [Online-Convert](https://image.online-convert.com/convert-to-webp) - To convert my images to WebP.
* [HTML Validator](https://validator.w3.org) - Testing validity of HTML.
* [CSS Validator](https://jigsaw.w3.org/css-validator/) - Testing validity of CSS.
* [Am I Responsive](https://ui.dev/amiresponsive#) - Checking the responsive nature and creating the mock-ups provided.

### Content
The questions and answers were selected from this website [Sporcle](https://www.sporcle.com/games/bananaramarma/cinephile)

### Code
* Code on how to set timer to each question came from this website [Stack overflow](https://stackoverflow.com/questions/55021200/how-to-create-a-timer-per-question-using-javascript)
* Code on how to select option came from this website [W3cschool](https://w3cschoool.com/javascript-select-option)





