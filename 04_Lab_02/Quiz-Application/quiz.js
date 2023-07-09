function Question(index, questionText){

  this.index = index;
  this.questionText = questionText;
}

const question1 = new Question(1, "JavaScript supports");
const question2 = new Question(2, "Which language is used for styling web pages?");
const question3 = new Question(3, "Which is not a JavaScript Framework?");
const question4 = new Question(4, "Which is used to Connect to Database");
const question5 = new Question(5, "JavaScript is a");


function AnswerOption(answerText){

  this.answerText = answerText;
}

const functionAnswerOption = new AnswerOption("Functions");
const xhtmlAnswerOption = new AnswerOption("XHTML");
const cssAnswerOption = new AnswerOption("CSS");
const htmlAnswerOption = new AnswerOption("HTML");
const jQueryAnswerOption = new AnswerOption("JQuery");
const xmlAnswerOption = new AnswerOption("XML");
const pythonScriptAnswerOption = new AnswerOption("Python Script");
const djangoAnswerOption = new AnswerOption("Django");
const nodeJSAnswerOption = new AnswerOption("Node JS");
const phpAnswerOption = new AnswerOption("PHP");
const jsAnswerOption = new AnswerOption("JS");
const allAnswerOption = new AnswerOption("All");
const languageAnswerOption = new AnswerOption("Language");
const programmingLanguageAnswerOption = new AnswerOption("Programming Language");
const developmentAnswerOption = new AnswerOption("Development");



function AnswerOptions(answerOptions) {

  this.answerOptions = answerOptions;
}

let answerOptions1 = new AnswerOptions([functionAnswerOption, xhtmlAnswerOption, cssAnswerOption, htmlAnswerOption]);

let answerOptions2 = new AnswerOptions([htmlAnswerOption, jQueryAnswerOption, cssAnswerOption, xmlAnswerOption]);

let answerOptions3 = new AnswerOptions([pythonScriptAnswerOption, jQueryAnswerOption, djangoAnswerOption, nodeJSAnswerOption]);

let answerOptions4 = new AnswerOptions([phpAnswerOption, htmlAnswerOption, jsAnswerOption, allAnswerOption]);

let answerOptions5 = new AnswerOptions([languageAnswerOption, programmingLanguageAnswerOption, developmentAnswerOption, allAnswerOption]);

function QuestionAnswerOptions(questionObj, answerOptionsObj, correctAnswerObj) {

  this.questionObj = questionObj;
  this.answerOptionsObj = answerOptionsObj;
  this.correctAnswerObj = correctAnswerObj;
}

let qAO1 = new QuestionAnswerOptions(question1, answerOptions1, functionAnswerOption);
let qAO2 = new QuestionAnswerOptions(question2, answerOptions2, cssAnswerOption);
let qAO3 = new QuestionAnswerOptions(question3, answerOptions3, pythonScriptAnswerOption);
let qAO4 = new QuestionAnswerOptions(question4, answerOptions4, phpAnswerOption);
let qAO5 = new QuestionAnswerOptions(question5, answerOptions5, programmingLanguageAnswerOption);


function QuizApplication(questionAnswerOptionsArray){

  this.pageIndex = 0;
  this.questionAnswerOptionsArray = questionAnswerOptionsArray

  this.startQuiz = function(){

    this.attachListeners();
    this.displayQuestionPage();
  }

  this.displayQuestionPage = function(){

    this.displayQASection();
    this.displayProgressSection();
  }

  this.displayQASection = function(){

    const questionElement = document.getElementById("question")

    // Question
    const questionAnswerOptionsObj 
      = this.questionAnswerOptionsArray[this.pageIndex];
    questionElement.innerHTML = questionAnswerOptionsObj.questionObj.questionText;

    // Answer Options

    console.log("Outside for loop");
    console.log(questionAnswerOptionsObj.answerOptionsObj);

    const answerOptionsObjArray  = questionAnswerOptionsObj.answerOptionsObj.answerOptions;

    for (let index = 0; index < answerOptionsObjArray.length; index ++){

      console.log("Inside for loop");

      const answerOptionObj = answerOptionsObjArray[index];
      const answerText = answerOptionObj.answerText;
      console.log(answerText);

      const answerElement = document.getElementById("choice" + index);
      answerElement.innerHTML = answerText;
    }
  }


  this.displayProgressSection = function(){

    const progressElement = document.getElementById("progress");

    const questionAnswerOptionsObj 
    = this.questionAnswerOptionsArray[this.pageIndex];

    const progressElementText = `Question ${questionAnswerOptionsObj.questionObj.index} of ${questionAnswerOptionsArray.length}`;

    progressElement.innerHTML = progressElementText;
  }

  this.attachListeners = function() {

    const currentQuizApplicationObj = this;

    const questionAnswerOptionsObj 
    = this.questionAnswerOptionsArray[this.pageIndex];

    const answerOptionsObjArray  = questionAnswerOptionsObj.answerOptionsObj.answerOptions;

    for (let index = 0; index < answerOptionsObjArray.length; index ++){

      const buttonId = "btn" + index;

      const answerChoiceHtmlElement = document.getElementById(buttonId);  
      this.addEventListener(answerChoiceHtmlElement, currentQuizApplicationObj);
    }
  }

  this.addEventListener = function(answerChoiceHtmlElement, currentQuizApplicationObj){

    answerChoiceHtmlElement.onclick = function(event) {

      console.log("THIS")
      console.log(this);
      // Score tracking logic

      // this -> quizApplication
      currentQuizApplicationObj.nextPage();
    }
  }

  this.nextPage = function() {

    if (this.pageIndex === (this.questionAnswerOptionsArray.length - 1)){
      this.displayResultPage();
    }else{
      this.initAndDisplayNextQuestionPage();
    }
  }

  this.initAndDisplayNextQuestionPage = function(){

      this.pageIndex ++;
      this.attachListeners();
      this.displayQuestionPage();
  }

  this.displayResultPage = function(){
    console.log("Render result page");
  }
}

const quizApplication = new QuizApplication([
  qAO1, qAO2, qAO3, qAO4, qAO5
]);
quizApplication.startQuiz();

// qAO1.isACorrectAnswer(userSuppliedAnswer)