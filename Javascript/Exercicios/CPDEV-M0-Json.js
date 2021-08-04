const nomes = `{
    "gatos": [
        {
            "nome": "Lucy",
            "idade": "2",
        },
        {
            "nome": "Bella",
            "idade": "3"
        },
        {
            "nome": "Luna",
            "idade": "4"
        }
    
    ], 

        "cachorros": [
            {
            "nome": "Fox",
            "idade": "6"
        }
    ]
    
}`
// manipular dados do JSON
console.log(JSON.parse(nomes))