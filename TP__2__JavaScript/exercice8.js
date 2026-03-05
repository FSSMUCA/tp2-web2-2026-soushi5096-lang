let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";
let errorEmail;
let indexArobase = email.indexOf("@") ;
nom=nom.trim();
age=Number(age);
let statuss;
if(age<=0 || age == NaN){
    statuss="invalide ";
}else{
    statuss="valide ";
}
if (indexArobase === -1) {
  errorEmail=`"invalide : pas de @"`;
} else {
  let indexPoint = email.indexOf(".", indexArobase) ; 
  if (indexPoint === -1) {
    errorEmail =`invalide : pas de point après @"`;
  } else {
    console.log("valide");
  }
}
scoreJeu=parseInt(scoreJeu);
if(estAdmin=="false"){
    estAdmin=!Boolean(estAdmin);
}else{
    estAdmin=Boolean(estAdmin);
}

derniereConnexion = derniereConnexion ?? "Jamais connecté" ;
nombreConnexions=Number(nombreConnexions);
if(nombreConnexions === 0 ){
    nombreConnexions="Aucune connexion"
}else {
    nombreConnexions;
}
console.log(`===== RAPPORT UTILISATEUR =====`);
console.log(`Nom : ${nom} \nAge : ${age}(${statuss})\nEmail : ${email}(${errorEmail})\nscoreJeu : ${scoreJeu}\nestAdmin : ${estAdmin}`);
console.log(`derniereConnexion:${derniereConnexion}\nnombreConnexions : ${nombreConnexions}`);
console.log(`================================`);