renderMathInElement(document.body, {
    // customised options
    // • auto-render specific keys, e.g.:
    delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
    ],
    // • rendering keys, e.g.:
    throwOnError : false
});

function renderMath() {
    renderMathInElement(document.body, {
        // customised options
        // • auto-render specific keys, e.g.:
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
        ],
        // • rendering keys, e.g.:
        throwOnError : false
    });
}

const shift = "308px";
var i = 0;
function useNav() {
    if (i % 2 === 0) {
        document.getElementById("settings-button").style.marginRight = shift;
        document.getElementById("settings-container").style.width = shift;
        i += 1;
    } else if (i % 2 === 1) {
        document.getElementById("settings-button").style.marginRight = "0";
        document.getElementById("settings-container").style.width = "0";
        i += 1;
    }
}

const solutionTextContainer = document.getElementsByClassName("solution_text_container")[0];
const solutionBox = document.getElementsByClassName("solution_box")[0];
const downCaret = document.getElementById("down_caret");
var curr_angle = 180;
function showSolution(){
    downCaret.style.transform = "scale(0.65) rotate(" + curr_angle + "deg)";
    curr_angle += 180;
    if (solutionTextContainer.style.gridTemplateRows === "1fr") {
        solutionTextContainer.style.gridTemplateRows = "0fr";
        solutionBox.style.paddingTop = "0px";
        solutionBox.style.paddingBottom = "0px";
    } else {
        solutionTextContainer.style.gridTemplateRows = "1fr";
        solutionBox.style.paddingTop = "15px";
        solutionBox.style.paddingBottom = "10px";
    }
}

window.showSolution = showSolution;

