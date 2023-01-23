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
        case raindowColors[0] : 
        document.body.style.backgroundColor = "red";
    }

    case

    if(color == raindowColors[0]){
        
        console.log(`você falou ${color}`);
        document.body.style.backgroundColor = "red";

    }else if(color == raindowColors[1]){

        console.log(`você falou ${color}`);
        document.body.style.backgroundColor = "orange";

    }else if(color == raindowColors[2]){

        console.log(`você falou ${color}`);
        document.body.style.backgroundColor = "yellow";
    }else if(color == raindowColors[3]){

        document.body.style.backgroundColor = "green";
    }else if(color == raindowColors[4]){

        console.log(`você falou ${color}`);
        document.body.style.backgroundColor = "blue";
        console.log(`você falou ${color}`);
    }else if(color == raindowColors[5]){

        console.log(`você falou ${color}`);
        document.body.style.backgroundColor = "indigo";
    }else if(color == raindowColors[6]){

        console.log(`você falou ${color}`);
        document.body.style.backgroundColor = "violet";
    }
};