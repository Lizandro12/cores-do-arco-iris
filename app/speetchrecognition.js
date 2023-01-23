const elementColors = document.querySelector("#cores");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak( event){
    const dataColor = event.results[0][0].transcript;

    const color = dataColor.toUpperCase();
/*     const upperCaseFirstLetter = dataColor[0].toUpperCase();
    const upperCaseLastLetters = dataColor.langth -1; */

    printColors(color);
    verifyColors(color);

};

function printColors(color){
    const paragraph = document.createElement("p");

    paragraph.textContent = color;

    elementColors.appendChild(paragraph);
};

recognition.addEventListener("end", () => recognition.start());