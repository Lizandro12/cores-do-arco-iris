
//ARAY USADO PARA VERIFICAR SE AS CORES FALADAS PERTENSEM AO ARCO IRISS
const rainbowColors = ['AMARELO','AZUL','LARANJA','TURQUESA','VERDE','VERMELHO','VIOLETTA',];

//ARRAY QUE RECEBE AS CORES FALADAS PARA POSTERIOR VALIDAÇÃO
const colorForValidate = [];

//FUNCAO QUE VERIFICA AS CORES
function verifyColors(color){

        switch (color){
            case rainbowColors[5]: 
                if(!colorForValidate.includes(color)){
                    document.body.style.backgroundColor = "red";
                    colorForValidate.push(color);
                }
                break
            case rainbowColors[2]:
                if(!colorForValidate.includes(color)){
                    document.body.style.backgroundColor = "orange";
                    colorForValidate.push(color);
                }
                break
             case rainbowColors[0]:
                if(!colorForValidate.includes(color)){
                    document.body.style.backgroundColor = "yellow";
                    colorForValidate.push(color);
                }
                break
            case rainbowColors[4]:
                if (!colorForValidate.includes(color)) {
                    document.body.style.backgroundColor = "green";
                    colorForValidate.push(color);   
                }
                break
            case rainbowColors[1]:
                if (!colorForValidate.includes(color)) {
                    document.body.style.backgroundColor = "blue";
                    colorForValidate.push(color);   
                }
                break
            case rainbowColors[3]:
                if (!colorForValidate.includes(color)) {
                    document.body.style.backgroundColor = "indigo";
                    colorForValidate.push(color);   
                }
                break
            case rainbowColors[6]:
                if (!colorForValidate.includes(color)) {
                    document.body.style.backgroundColor = "violet";
                    colorForValidate.push(color);   
                } 
                break
            default: 
                document.body.style.backgroundColor = "black";
                document.body.innerHTML = `
                <h2>Upps você acertou cores</h2>
                <h3>Por favor, pressione o botão para recomeçar</h3>
                <button id ="jogar-novamente" class ="btn-jogar">Jogar Novamente</button>
                `;
                document.body.style.color = "#ffff";
                break
        };
        console.log(colorForValidate);

        formARainbow();
};

function formARainbow(){

    colorForValidate.sort;

    if(rainbowColors.length === colorForValidate.length){
        document.body.classList.add("activo");
    }
}

document.body.addEventListener("click", (e)=>{
    if (e.target.id === "jogar-novamente") {
        window.location.reload();
        
    }
});
