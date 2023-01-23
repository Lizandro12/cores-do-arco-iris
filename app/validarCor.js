function verifyColors(color){
    const raindowColors = [
        'vermelho',
        'laranja',
        'Amarelo',
        'Verde', 
        'azul',
        'anil',
        'violeta'
    ];

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

        console.log(`você falou ${color}`);
        document.body.style.backgroundColor = "green";
    }
};