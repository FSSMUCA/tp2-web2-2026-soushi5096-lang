let valuers =[0, NaN, Infinity, -Infinity, 42, 3.13,Number.MAX_SAFE_INTEGER + 1, -0];
let tailleTab = valuers.length ;
for (let i = 0 ; i < tailleTab ; i++) {
  let valeur = valuers[i];
  if (Number.isNaN(valeur)) {
    resultat = "INVALIDE";
  } else if (valeur === Infinity || valeur === -Infinity) {
    resultat = "INFINI";
  } else if (1 / valeur === -Infinity) {
    resultat = "ZERO NEGATIF";
  } else if (Number.isInteger(valeur)) {
    if (valeur <= Number.MAX_SAFE_INTEGER) {
      resultat = "ENTIER SUR";
    } else {
      resultat = "ENTIER HORS LIMITES";
    }
  } else {
    resultat = "DECIMAL";
  }
  console.log(`${valeur} -> ${resultat}`);
}
