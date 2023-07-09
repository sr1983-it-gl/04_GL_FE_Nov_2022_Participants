function Question(index, questionText){

  this.index = index;
  this.questionText = questionText;
}

const question1 = new Question(1, "JavaScript supports");
const question2 = new Question(2, "Which language is used for styling web pages?");
const question3 = new Question(3, "Which is not a JavaScript Framework?");


function AnswerOption(answerText){

}

let answerOption1 = new AnswerOption("Functions");
let answerOption2 = new AnswerOption("XHTML");
let answerOption3 = new AnswerOption("CSS");
let answerOption4 = new AnswerOption("HTML");



function AnswerOptions(answerOptions) {

}

let answerOptions1 = new AnswerOption([answerOption1, answerOption2, answerOption3, answerOption4]);

function QuestionAnswerOptions(questionObj, answerOptionsObj, correctAnswerObj) {


}

let qAO1 = new QuestionAnswerOptions(question1, answerOptions1, answerOption1);

