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