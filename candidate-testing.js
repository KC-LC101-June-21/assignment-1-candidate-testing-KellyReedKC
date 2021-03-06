const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = ["1) Who was the first American woman in space? \n", "2) True or false: 5 kilometer == 5000 meters? \n", "3) (5 + 3)/2 * 10 = ? \n", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? \n", "5) What is the minimum crew size for the ISS? \n"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = []
let candidateGrade = 0


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  candidateName = input.question("Candidate name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]))

    console.log(`Your answer: ${candidateAnswers[i]} \nCorrect answer: ${correctAnswers[i]}\n`);

  }
}

function gradeQuiz(candidateAnswers) {

  let grade = 0;
  for (let i = 0; i < questions.length; i++) {

    if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()) {
      grade += 1; 
    }
  }

  return grade;
}

function runProgram() {
  askForName();

  // TODO 1.1c: Ask for candidate's name //


  // console.log("What's up " + candidateName);//

  askQuestion();


  candidateGrade = gradeQuiz(this.candidateAnswers);

  let finalGrade = candidateGrade/5 * 100;  

  console.log(`>>> Overall grade: ${finalGrade}% (${candidateGrade} of 5 responses correct) <<<`);

  if (finalGrade >= 80) {
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  }

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};