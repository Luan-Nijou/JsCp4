let sal = [1200,1800,1600,900,750,2501,2890,9000,7800,2500]
console.log(sal);

let sal_map = sal.map(salario =>{
    if(salario<=2000){
        return salario*1.15;
    }else{
         return  salario*1.10;
    }
});

console.log(sal_map);

let sep_sal= sal_map.filter((separar) =>{
    return  separar>2500
});

console.log(sep_sal)

let soma = sep_sal.reduce((acumulado,atual)=> acumulado + atual)

console.log(soma);