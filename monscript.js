let nomJour = "Mercredi";
let numJour = "3";
let nomMois = "Fevrier";
let isWinter = true;
console.log(nomJour , numJour , nomMois , isWinter);
let tabJours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
let tabMois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
console.log(tabJours[2], tabMois[1]);

let maDate={
    jour : tabJours[2],
    mois : tabMois[1],
};
let maDateV2={
    jour : nomJour,
    mois : nomMois,
};

console.log(maDate.jour, maDate.mois);
console.log(maDateV2.jour, maDateV2.mois);

let nbr1;
let nbr2;
let nbr3;
let nbr4;
nbr1=3;
nbr2=7;
nbr3=8;
nbr4=21;
console.log(nbr1 + nbr2);
console.log(nbr4 - nbr3);
nbr2 = nbr1 * nbr2;
console.log(nbr2);
nbr2 ++;
console.log(nbr2);
console.log(nbr4 / nbr1);
console.log(nbr4 % nbr1);

let nomSerie = prompt("Quelle est ta série préferée?");
let nomPerso = prompt("Quel est ton personnage favori?");
console.log(`Ma série préférée est ${nomSerie} et mon personnage est ${nomPerso}.`);
