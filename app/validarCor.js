
//ARRAY QUE RECEBE AS CORES FALADAS PARA POSTERIOR VALIDAÇÃO
const colorForValidate = [];

//ARAY USADO PARA VERIFICAR SE AS CORES FALADAS PERTENSEM AO ARCO IRISS
const rainbowColors = [
    'VERMELHO',
    'LARANJA',
    'AMARELO',
    'VERDE', 
    'AZUL',
    'ANIL',
    'VIOLETTA'
];

//FUNCAO QUE VERIFICA AS CORES
function verifyColors(color){

/*     const serachColor = colorForValidate.includes(color)  */

        switch (color){
            case rainbowColors[0]: 
                if(!colorForValidate.includes(color)){
                    document.body.style.backgroundColor = "red";
                    colorForValidate.push(color);
                }
                break
            case rainbowColors[1]:
                if(!colorForValidate.includes(color)){
                    document.body.style.backgroundColor = "orange";
                    colorForValidate.push(color);
                }
                break
            case rainbowColors[2]:
                if(!colorForValidate.includes(color)){
                    document.body.style.backgroundColor = "yellow";
                    colorForValidate.push(color);
                }
                break
            case rainbowColors[3]:
                if (!colorForValidate.includes(color)) {
                    document.body.style.backgroundColor = "green";
                    colorForValidate.push(color);   
                }
                break
            case rainbowColors[4]:
                if (!colorForValidate.includes(color)) {
                    document.body.style.backgroundColor = "blue";
                    colorForValidate.push(color);   
                }
                break
            case rainbowColors[5]:
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
            default: 
                document.body.style.backgroundColor = "black";
                document.body.innerHTML = `
                    </h1>ERRO<h1>
                `;
                document.body.style.color = "white";
                document.body.style.fontSize = "4em"
        };
    console.log(colorForValidate);
};