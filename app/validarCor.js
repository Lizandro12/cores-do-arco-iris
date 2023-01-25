
const colorForValidate = [];

const rainbowColors = [
    'VERMELHO',
    'LARANJA',
    'AMARELO',
    'VERDE', 
    'AZUL',
    'ANIL',
    'VIOLETTA'
];

function verifyColors(color){


     
    switch (color){
        case rainbowColors[0]: 
            document.body.style.backgroundColor = "red";
            colorForValidate.push(color);
            break
        case rainbowColors[1]:
            document.body.style.backgroundColor = "orange";
            colorForValidate.push(color);
            break
        case rainbowColors[2]:
            document.body.style.backgroundColor = "yellow";
            colorForValidate.push(color);
            break
        case rainbowColors[3]:
            document.body.style.backgroundColor = "green";
            colorForValidate.push(color);
            break
        case rainbowColors[4]:
            document.body.style.backgroundColor = "blue";
            colorForValidate.push(color);
            break
        case rainbowColors[5]:
            document.body.style.backgroundColor = "indigo";
            colorForValidate.push(color);
            break
        case rainbowColors[6]:
            document.body.style.backgroundColor = "violet";
            colorForValidate.push(color);
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