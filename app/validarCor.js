function verifyColors(color){
    const raindowColors = [
        'VERMELHO',
        'LARANJA',
        'AMARELO',
        'VERDE', 
        'AZUL',
        'ANIL',
        'VIOLETTA'
    ];


    switch (color){
        case raindowColors[0]: 

            document.body.style.backgroundColor = "red";

            break
        case raindowColors[1]:

            document.body.style.backgroundColor = "orange";

            break
        case raindowColors[2]:
            document.body.style.backgroundColor = "yellow";
            break
        case raindowColors[3]:
            document.body.style.backgroundColor = "green";
            break
        case raindowColors[4]:
            document.body.style.backgroundColor = "blue";
            break
        case raindowColors[5]:
            document.body.style.backgroundColor = "indigo";
            break
        case raindowColors[6]:
            document.body.style.backgroundColor = "violet";
            break
    };
};