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

let answerOptions1 = new AnswerOption([functionAnswerOption, xhtmlAnswerOption, cssAnswerOption, htmlAnswerOption]);

let answerOptions2 = new AnswerOption([htmlAnswerOption, jQueryAnswerOption, cssAnswerOption, xmlAnswerOption]);

let answerOptions3 = new AnswerOption([pythonScriptAnswerOption, jQueryAnswerOption, djangoAnswerOption, nodeJSAnswerOption]);

let answerOptions4 = new AnswerOption([phpAnswerOption, htmlAnswerOption, jsAnswerOption, allAnswerOption]);

let answerOptions5 = new AnswerOption([languageAnswerOption, programmingLanguageAnswerOption, developmentAnswerOption, allAnswerOption]);

function QuestionAnswerOptions(questionObj, answerOptionsObj, correctAnswerObj) {

  this.questionObj = questionObj;
  this.answerOptionsObj = answerOptionsObj;
  this.correctAnswerObj = correctAnswerObj;
}

let qAO1 = new QuestionAnswerOptions(question1, answerOptions1, functionAnswerOption);
let qAO2 = new QuestionAnswerOptions(question2, answerOptions2, cssAnswerOption);
let qAO3 = new QuestionAnswerOptions(question3, answerOptions3, pythonScriptAnswerOption);
let qAO4 = new QuestionAnswerOptions(question4, answerOptions4, phpAnswerOption);
let qAO5 = new QuestionAnswerOptions(question1, answerOptions1, programmingLanguageAnswerOption);


function QuizApplication(questionAnswerOptionsArray){

  this.questionAnswerOptionsArray = questionAnswerOptionsArray
}

const quizApplication = new QuizApplication([
  qAO1, qAO2, qAO3, qAO4, qAO5
]);

// qAO1.isACorrectAnswer(userSuppliedAnswer)