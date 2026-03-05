let valeurs = [null,0,"",undefined,false];
for(let i = 0 ; i < valeurs.length ;i++){
    let results = valeurs[i] ?? "valeur par défaut" ;
    console.log(`${JSON.stringify(valeurs[i])}  ?? valeur par défaut --> ${JSON.stringify(results)}`);
}
console.log("============================================================================= \n")
for(let i = 0 ; i < valeurs.length ;i++){
    let results = valeurs[i] || "valeur par défaut" ;
    console.log(`${JSON.stringify(valeurs[i])}  ||  valeur par défaut --> ${JSON.stringify(results)}`);
}
console.log("============================================================================= \n")
for(let i = 0 ; i < valeurs.length ;i++){
    let result = valeurs[i] || "valeur par défaut" ;
    let results = valeurs[i] ?? "valeur par défaut" ;
    if(result===results){
        console.log(`${JSON.stringify(valeurs[i])} : ?? et ||  -> même résultat `);
    }else{
        console.log(` ${JSON.stringify(valeurs[i])} :  ?? et ||  -> résultat différent `);
    }
}