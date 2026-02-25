/*let nomJour = "Mercredi";
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
alert(`Ma série préférée est ${nomSerie} et mon personnage est ${nomPerso}.`);

let number = 5;
let text = '5';
let isRainingToday = true;
console.log(number == text);
console.log(number === text);
if(isRainingToday){
    console.log("Where is my umbrella!");
}
let age = prompt("Quel âge as-tu?");
if(age < 0){
    alert("Âge invalide.");
}
    /*
else if(age == 18){
    alert(`L'utilisateur de ${age} ans vient d'être majeur.`);
}else if(age == 25){
    alert(`L'utilisateur de ${age} ans à un quart de siècle.`);
}
else if(age == 50){
    alert(`L'utilisateur de ${age} ans à un demi-siècle.`);
}
else if(age == 62){
    alert(`L'utilisateur de ${age} ans est retraité.`);
}
else if(age == 100){
    alert(`L'utilisateur de ${age} ans à vécu un siècle.`);
}

switch(age){
    case '18':
        alert(`L'utilisateur de ${age} ans vient d'être majeur.`);
        break;
    case '25':
        alert(`L'utilisateur de ${age} ans à un quart de siècle.`);
        break;
    case '50':
        alert(`L'utilisateur de ${age} ans à un demi-siècle.`);
        break;
    case '62':
        alert(`L'utilisateur de ${age} ans est retraité.`);
        break;
    case '100':
        alert(`L'utilisateur de ${age} ans à vécu un siècle.`);
        break;
}*/



/* TP Boucle */
/*let result = 0;
let i = 0;
let lenght = +prompt("choisis un nombre entre 1 et 100");
if(lenght < 1 || lenght > 100) {
    alert("Retente avec qq chose de valide.");
}else{
    do{
        result += i;
        i++;
    }while(i<=lenght && typeof lenght == Number);
}
/*for(let i = 0; i <= 100; i++){
    result += i;
}

while(i <=100){
    result += i;
    i++;
}

do{
    result += i;
    i++;
}while(i <= 100);
console.log(result);
*/

 


/* TP 12 */

// let tabElements = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5", "Element 6", "Element 7", "Element 8", "Element 9", "Element 10"];
// /*for(let i = 0; i < 8; i++){
// console.log(tabElements[i]);
// }*/

// /*for(let i = 0; i < tabElements.length; i++){
//     console.log(tabElements[i]);
// }*/

// /* EX Bonus */

// let annee = +prompt("En quelle année êtes vous né?");
// /*function calculAge(annee){
//     let date = new Date();
//     let anneeActuelle = date.getFullYear();
//     return anneeActuelle - annee;
// }
// console.log(`Vous avez ${calculAge(annee)} ans.`);

// */
// /* Fonction fléchée */
// let ageV2 = annee => {
//     let date = new Date();
//     let anneeActuelle = date.getFullYear();
//     return anneeActuelle - annee;
// }
// console.log(`Vous avez ${ageV2(annee)} ans.`);






