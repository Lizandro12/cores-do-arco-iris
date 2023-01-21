const elementoCores = document.querySelector("#cores");

window.SpeechRecognition = window.speetchRecognition || webkitSpeetchRecognition;

const recognition = new speetchRecognition();
recognition.lang = "pt-Br";

recognition.addEventListener("result", onSpeak);

function onSpeak( event ){
    console.log(event)
}