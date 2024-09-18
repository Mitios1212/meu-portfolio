var carro = [{modelo: "Audio A3", marca : "Audi", ano: 2020},]

for (let carecteristica in carro){
   console.log(carro[carecteristica]);
}



for (let c of carro){
    console.log(c.modelo)
 };


var c = 1;
while (c <= 5){
    console.log(c);
    c++;
}

var t = 1;

do{
    console.log(t);
    t++
} while(t <= 5);