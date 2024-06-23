import physicsProblemsData from "./physicsProblems.json" with {type: "json"};

const solutionContainer = document.getElementsByClassName("solution_container")[0];
const solutionTextContainer = document.getElementsByClassName("solution_text_container")[0];
const downCaret = document.getElementById("down_caret");
const problemHeader = document.getElementsByClassName("problem_header")[0];
const problemBox = document.getElementsByClassName("problem_box")[0];
const choicesContainer = document.getElementsByClassName("choices_container")[0];
const solutionBox = document.getElementsByClassName("solution_box")[0];
const answerForm = document.getElementById("answerForm");
const submitButton = document.getElementById("submit_button");

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

const problems = [];
for (var i = 0; i < physicsProblemsData.length; i++) {
    problems[problems.length] = i;
}
shuffle(problems);
var i = 0;
var possibleAnswers = [];
function loadNewProblem() {
    answerForm.style.border = "3px solid black";
    answerForm.style.color = "black";
    answerForm.value = "";
    submitButton.style.border = "3px solid black";
    submitButton.style.color = "black";
    if (solutionTextContainer.style.gridTemplateRows === "1fr") {
        solutionContainer.style.height = "60px";
        solutionTextContainer.style.gridTemplateRows = "0fr";
        solutionBox.style.paddingTop = "0px";
        solutionBox.style.paddingBottom = "0px";
        setTimeout(function () {
            solutionContainer.style.height = "auto";
        }, 400);
    }

    problemHeader.innerHTML = physicsProblemsData[problems[i]]["competition"] + " " + physicsProblemsData[problems[i]]["year"] + " Problem #" + physicsProblemsData[problems[i]]["problem"] + "<button id=\"generate_button\" onclick='loadNewProblem(); renderMath()'>New problem</button>";
    problemBox.innerHTML = physicsProblemsData[problems[i]]["problemLatex"];
    choicesContainer.innerHTML = "<br>" + physicsProblemsData[problems[i]]["choicesLatex"];
    solutionBox.innerHTML = physicsProblemsData[problems[i]]["solutionLatex"];
    const answerLetter = physicsProblemsData[problems[i]]["answerLetter"];
    const answerValue = physicsProblemsData[problems[i]]["answerValue"];
    possibleAnswers = [answerLetter, "(" + answerLetter + ")"];
    for (var j = 0; j < possibleAnswers.length; j++) {
        possibleAnswers[j] = possibleAnswers[j].replaceAll(" ", "").toLowerCase();
    }
    i++;
    if (i >= problems.length) {
        shuffle(problems);
        i = 0;
    }
}

loadNewProblem();
window.loadNewProblem = loadNewProblem;



function submitAnswer() {
    let answer = answerForm.value;
    answer = answer.replaceAll(" ", "").toLowerCase();
    if (possibleAnswers.includes(answer)) {
        answerForm.style.border = "3px solid #6cc967";
        answerForm.style.color = "#6cc967";
        submitButton.style.border = "3px solid #6cc967";
        submitButton.style.color = "#6cc967";
        if (solutionTextContainer.style.gridTemplateRows !== "1fr") {
            solutionTextContainer.style.gridTemplateRows = "1fr";
            solutionBox.style.paddingTop = "15px";
            solutionBox.style.paddingBottom = "5px";
        }
    } else {
        answerForm.style.border = "3px solid #d44833"
        answerForm.style.color = "#d44833";
        submitButton.style.border = "3px solid #d44833";
        submitButton.style.color = "#d44833";
    }
}

function detectEnterPress(event) {
    if (event.key === "Enter") {
        submitAnswer();
    }
}

window.submitAnswer = submitAnswer;
window.detectEnterPress = detectEnterPress;
