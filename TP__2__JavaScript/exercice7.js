let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;
let sousTotal = prix * quantite;
let totalFinal ;
let reduction ;
let statuss ;
console.log(`le sous-totale est : ${sousTotal}`);
if(codePromo!==null && estMembre ===true){
    reduction = sousTotal * reductionPourcentage/100;
    console.log(`le montant de la réduction est: ${reduction}`);
    totalFinal =sousTotal - reduction;
    console.log(`le totale finale est : ${totalFinal}`);
    if(soldeCompte>=totalFinal){
        statuss="Paiement accepté"
        console.log(`"Paiement accepté"`);
        soldeCompte-=totalFinal;
        console.log(`le **nouveau solde** après achat est : ${soldeCompte}`);
    }else{
        statuss="Solde insuffisant";
        console.log(`"Solde insuffisant"`)
    }
}else{
    totalFinal =sousTotal ;
    reduction = 0 ;
    console.log(`le montant de la réduction est 0 `);
    console.log(`le totale finale est : ${totalFinal}`);
    if(soldeCompte>=totalFinal){
        statuss="Paiement accepté"
        console.log(`"Paiement accepté"`);
        soldeCompte-=totalFinal;
        console.log(`le **nouveau solde** après achat est : ${soldeCompte}`);
    }else{
        statuss="Solde insuffisant";
        console.log(`"Solde insuffisant"`)
    }
}
console.log(`=========   Récapitulatif   ===========`);
console.log(`Produit : ${nomProduit}`);
console.log(`Prix unit : ${prix}`);
console.log(`Quantite : ${quantite}`);
console.log(`sous totale : ${sousTotal.toFixed(3)}`);
console.log(`La reduction : ${reduction}`);
console.log(`Totale : ${totalFinal.toFixed(3)}`);
console.log(`status : ${statuss}`);
console.log(`solde : ${soldeCompte}`);


