var arr = [1,2,3,4,5,6,7,8];

var num = arr.map(function(valor){
    return valor * 2;
});
console.log(num);

var funcionarios = [
    {nome: "mit", idade: 22},
    {nome: "Uala", idade: 23},
    {nome: "Josu", idade: 24},
    {nome: "Birt", idade: 25},
]

nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);


var tot = arr.reduce(function(total,numero){
    return total + numero;
}, 0);

console.log(tot);

var champs = ["Akali","Phantheon","Nunu","Sivir"];

champs.forEach(function(champ){
    console.log(champ);
})