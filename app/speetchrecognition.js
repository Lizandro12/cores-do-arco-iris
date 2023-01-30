const elementColors = document.querySelector("#cores");
//INSERÇÃO DE CODIGO DE RECONHECIMENTO DE VOZ
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

//FUNCAO EXECUTADA A CADA VEZ QUE COM O EVENTO DE RECONHECIMENTO DE VOZ
function onSpeak( event){
    const dataColor = event.results[0][0].transcript;

    const color = dataColor.toUpperCase();

    printColors(color);
    verifyColors(color);

};

//FUNCAO QUE IMPRIME NA TELA A COR FALADA
function printColors(color){
    elementColors.innerHTML = `
    
    <p >Você falou: </p>
    <p class ="frase">${color}</p>
    `
};

recognition.addEventListener("end", () => recognition.start());