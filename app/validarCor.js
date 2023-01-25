
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
        break
        case rainbowColors[1]:
            document.body.style.backgroundColor = "orange";
            break
        case rainbowColors[2]:
            document.body.style.backgroundColor = "yellow";
            break
        case rainbowColors[3]:
            document.body.style.backgroundColor = "green";
            break
        case rainbowColors[4]:
            document.body.style.backgroundColor = "blue";
            break
        case rainbowColors[5]:
            document.body.style.backgroundColor = "indigo";
            break
        case rainbowColors[6]:
            document.body.style.backgroundColor = "violet";
    };

    colorForValidate.push(color);

    console.log(colorForValidate);
};