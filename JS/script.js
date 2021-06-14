
// On récupère les élements qui vont servir à l'affichage
const affichage = document.getElementsByClassName('exercice')[0];
const elemAffichage = affichage.children;
console.log(elemAffichage);

// variable global
let etape = 1;
let etapeMax = 23;
let exercice = "1";
let var1;
let var2;
let var3;
let var4;
let var5;

//boutton
const suivant = document.getElementById('btnSuivant');
const precedant = document.getElementById('btnPrecedant');
suivant.addEventListener("click", suivantFunc, false);
precedant.addEventListener("click", precedantFunc, false);

//fonction principale

function suivantFunc() {
    if (etape < etapeMax){
        etape++;
        myFunc()
    }
}
function precedantFunc() {
    if (etape != 1) {
        etape--;
        myFunc()
    }
}
function myFunc() {
    switch (etape) {
        case 1:
            exercice = "1";
            var1 = prompt('Veuillez donner une valeur à la première variable');
            var2 = prompt('Veuillez donner une valeur à la deuxieme variable');
            elemAffichage[1].innerHTML = 'Inverser les valeurs de deux variables';
            elemAffichage[2].innerHTML = `La première variable vaut ${var1}`;
            elemAffichage[3].innerHTML = `La deuxième variable vaut ${var2}`;
            break;

        case 2:
            exercice = "1 resultat";
            exo1();
            elemAffichage[1].innerHTML = 'Inverser les valeurs de deux variables';
            elemAffichage[2].innerHTML = `La première variable vaut ${var1}`;
            elemAffichage[3].innerHTML = `La deuxième variable vaut ${var2}`;
            elemAffichage[4].innerHTML = ``;
            break;

        case 3:
            let Nom = "toto";
            let Age = 30;
            let Homme = true;
            exercice = "2";
            elemAffichage[1].innerHTML = 'Afficher des variables';
            elemAffichage[2].innerHTML = `La première variable "Nom" vaut ${Nom}`;
            elemAffichage[3].innerHTML = `La deuxième variable "Age" vaut ${Age}`;
            elemAffichage[4].innerHTML = `La troisième variable "Homme" vaut ${Homme}`;
        break;

        case 4:
            exercice = "2.3";
            var1 = prompt("saisissez un nombre");
            var3 = var1 * var1;
            elemAffichage[1].innerHTML = 'Réaliser un programme permettant à l’utilisateur de saisir la puissance de 2 qu’il souhaite afficher';
            elemAffichage[2].innerHTML = `La première variable vaut ${var1}`;
            elemAffichage[3].innerHTML = `La première variable puissance de 2 vaut ${var3}`;
            elemAffichage[4].innerHTML = ``;
        break;

        case 5:
            exercice = "2.3.3";
            var1 = prompt("saisissez un nombre");
            var2 = prompt("saisissez un nombre");
            var3 = parseInt(var1) + parseInt(var2);
            elemAffichage[1].innerHTML = 'Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.';
            elemAffichage[2].innerHTML = `La première variable vaut ${var1}`;
            elemAffichage[3].innerHTML = `La deuxième variable vaut ${var2}`;
            elemAffichage[4].innerHTML = `Leur somme vaut ${var3}`;
        break;

        case 6:
            exercice = "3";
            var1 = prompt("saisissez un nombre");
            var2 = var1 * 60;
            elemAffichage[1].innerHTML = 'Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes';
            elemAffichage[2].innerHTML = `${var1}min`;
            elemAffichage[3].innerHTML = `valent ${var2} secondes`;
            elemAffichage[4].innerHTML = ``;
        break;

        case 7:
            exercice = "4";
            var1 = prompt("saisissez un nombre");
            var2 = exo4( parseInt(var1));
            elemAffichage[1].innerHTML = 'Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat';
            elemAffichage[2].innerHTML = `Votre nombre : ${var1}`;
            elemAffichage[3].innerHTML = `${var1} + 1 = ${var2}`;
            elemAffichage[4].innerHTML = ``;
        break;

        case 8:
            exercice = "5";
            var1 = prompt("saisissez un nombre");
            var2 = prompt("saisissez un nombre");
            var3 = parseInt(var1) * parseInt(var2) / 2;
            elemAffichage[1].innerHTML = 'Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface';
            elemAffichage[2].innerHTML = `Largueur : ${var1}`;
            elemAffichage[3].innerHTML = `Hauteur ${var2}`;
            elemAffichage[4].innerHTML = `La surface du triangle vaut ${var3}`;
        break;    

        case 9:
            exercice = "6";
            var1 = prompt("saisissez quelques mots");
            var2 = reverse(var1);
            var3 = parseInt(var1) * parseInt(var2) / 2;
            elemAffichage[1].innerHTML = 'Écrivez un programme JavaScript pour inverser une chaîne de caractères.';
            elemAffichage[2].innerHTML = `${var1}`;
            elemAffichage[3].innerHTML = `${var2}`;
            elemAffichage[4].innerHTML = ``;
        break;

        case 10:
            exercice = "7";
            var1 = prompt("saisissez un nombre");
            var2 = prompt("saisissez un nombre");
            var3 = prompt("saisissez un nombre");
            var4 = exo7(parseInt(var1), parseInt(var2), parseInt(var3));
            elemAffichage[1].innerHTML = 'Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.';
            elemAffichage[2].innerHTML = `Le plus grand de ces nombres ${var1}, ${var2}, ${var3} est :`;
            elemAffichage[3].innerHTML = `${var4}`;
            elemAffichage[4].innerHTML = ``;
        break;

        case 11:
            exercice = "8";
            var1 = [50,30,4040,85,65];
            var2 = arrayToString(var1);
            var3 = exo8(var1);
            elemAffichage[1].innerHTML = 'Créez une fonction qui prend un tableau et renvoie le premier élément du tableau.';
            elemAffichage[2].innerHTML = `${var2} est un tableau de valeurs`;
            elemAffichage[3].innerHTML = `${var3} est le premier élément du tableau`;
            elemAffichage[4].innerHTML = ``;
        break;

        case 12:
            exercice = "9";
            var1  = document.location.href;
            elemAffichage[1].innerHTML = 'Écrivez un programme JavaScript pour récupérer l’URL d’un site Web.';
            elemAffichage[2].innerHTML = `L'url de la page est : `;
            elemAffichage[3].innerHTML = `${var1}`;
            elemAffichage[4].innerHTML = ``;
        break;

        case 13:
            exercice = "10";
            var1 = prompt("saisissez un nombre");
            var2 = prompt("saisissez un nombre");
            var3 = parseInt(var1) % parseInt(var2);
            var4 = parseInt(var1) / parseInt(var2);
            elemAffichage[1].innerHTML = 'Écrivez un programme JavaScript pour renvoyer le reste de deux nombres';
            elemAffichage[2].innerHTML = `${var1} divisé par ${var2}  = ${var4}`;
            elemAffichage[3].innerHTML = `le reste de la division est ${var3} ! `;
            elemAffichage[4].innerHTML = ``;
        break;

        case 14:
            exercice = "11";
            var1 = parseInt(prompt("saisissez un nombre"));
            var2 = parseInt(prompt("saisissez un nombre"));
            var3 = ((var1 + var2) < 100) ? true : false;
            elemAffichage[1].innerHTML = 'Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE';
            elemAffichage[2].innerHTML = `${var1} + ${var2} = ${var1 + var2}`;
            elemAffichage[3].innerHTML = `return ${var3} `;
            elemAffichage[4].innerHTML = ``;
        break;

        case 15:
            exercice = "12";
            var1 = prompt("saisissez un nombre d'heure");
            var2 = parseInt(var1) * 60 * 60;
            elemAffichage[1].innerHTML = 'Écrivez une fonction qui convertit les heures en secondes.';
            elemAffichage[2].innerHTML = `${var1} heure(s) est égal à ${var2} secondes`;
            elemAffichage[3].innerHTML = ``;
            elemAffichage[4].innerHTML = ``;
        break;

        case 16:
            exercice = "13";
            var1 = exo13(parseInt(prompt("saisissez un nombre positif, negatif ou zero")));
            elemAffichage[1].innerHTML = 'Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon retournez FALSE';
            elemAffichage[2].innerHTML = `return ${var1}`;
            elemAffichage[3].innerHTML = ``;
            elemAffichage[4].innerHTML = ``;
        break;

        case 17:
            exercice = "14";
            var1 = prompt("saisissez un nombre");
            var2 = prompt("saisissez un nombre");
            var3 = exo14(parseInt(var1), parseInt(var2));
            elemAffichage[1].innerHTML = 'Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.';
            elemAffichage[2].innerHTML = `return ${var3}`;
            elemAffichage[3].innerHTML = ``;
            elemAffichage[4].innerHTML = ``;
        break;

        case 18:
            exercice = "15";
            var1 = prompt("saisissez un nombre");
            var3 = exo15(parseInt(var1));
            elemAffichage[1].innerHTML = 'Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.';
            elemAffichage[2].innerHTML = `return ${var3}`;
            elemAffichage[3].innerHTML = ``;
            elemAffichage[4].innerHTML = ``;
        break;

        case 19:
            exercice = "16";
            var1 = prompt("saisissez un nombre d'heure(s)");
            var2 = prompt("saisissez un nombre de minute(s)");
            var3 = exo16(parseInt(var1), parseInt(var2));
            elemAffichage[1].innerHTML = 'Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.';
            elemAffichage[2].innerHTML = `${var1} heure(s) ${var2} minute(s)`;
            elemAffichage[3].innerHTML = `équivaut à ${var3} secondes`;
            elemAffichage[4].innerHTML = ``;
        break;
        case 20:
            exercice = "17";
            var1 = [50,30,4040,85,65];
            var2 = arrayToString(var1);
            var3 = arrayToString(exo17(var1));
            elemAffichage[1].innerHTML = 'Écrivez une fonction pour inverser un tableau';
            elemAffichage[2].innerHTML = `${var2} est un tableau de valeurs`;
            elemAffichage[3].innerHTML = `${var3} est le même tableau mais inversé!`;
            elemAffichage[4].innerHTML = ``;
        break;
        case 21:
            exercice = "18";
            var1 = [50,30,4040,85,65];
            var2 = arrayToString(var1);
            var3 = exo18(var1);
            elemAffichage[1].innerHTML = 'Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.';
            elemAffichage[2].innerHTML = `${var2} est un tableau de valeurs`;
            elemAffichage[3].innerHTML = `${var3} est le derniere élément du tableau`;
            elemAffichage[4].innerHTML = ``;
        break;
        case 22:
            exercice = "19";
            var1 = prompt('entré une valeur "string" ou "numérique"');
            var2 = prompt('entré une valeur "string" ou "numérique"');
            var3 = exo19(var1, var2);
            elemAffichage[1].innerHTML = 'Créez une fonction qui vérifier l’égalité parfaite de deux paramètres a et b.';
            elemAffichage[2].innerHTML = `${var2} et ${var1} sont strictement égale?`;
            elemAffichage[3].innerHTML = `return ${var3}`;
            elemAffichage[4].innerHTML = ``;
        break;
        case 23:
            exercice = "20";
            var1 = prompt('veuillez cliquer sur la touche entrée pour true sinon entrer une valeur pour false');
            var3 = exo20(var1);
            elemAffichage[1].innerHTML = 'Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.';
            elemAffichage[2].innerHTML = `${var1}`;
            elemAffichage[3].innerHTML = `return ${var3}`;
            elemAffichage[4].innerHTML = ``;
        break;
        default:
            break;
    }
    elemAffichage[0].innerHTML = `Exercice ${exercice}`;
}
myFunc()

//fonctions exercices

function exo1() {
    let var3 = var1;
    var1 = var2;
    var2 = var3;
}
function exo4(int) {
    return int+1
}
function reverse(s){
    return s.split("").reverse().join("");
}
function exo7(a , b ,c) {
    if (a > b && a > c) {
        return a
    }else if(b > a && b > c){
        return b
    }else if(c > a && c > b){
        return c
    }else if (c == a && c == b) {
        return "les trois nombres sont égaux"
    }else if (c == a && c > b ) {
        return a
    }else if (c == b && c > a ) {
        return b
    }else if (b == a && b > c ) {
        return b
    }
}
function exo8(array = []) {
    return array[0];
}
function exo13(int) {
    return int <= 0 ? true : false;
}
function exo14(a, b) {
   return  a == b ? true : false;
}
function exo15(a) {
    return a % 5 == 0 ? true : false
}
function exo16( a, b) {
    let h = a * 60 * 60;
    let m = b * 60 ;
    return (h + m)
}
function arrayToString(array){
    let myString = '';
    for (let i = 0; i < array.length; i++) {
         myString += `${array[i]},`;
        
    }
    return myString
}
function exo17(arrayA) {
    let arrayB = [];
    for (let i = arrayA.length; i > 0; i--) {
        let y = arrayA.pop()
        arrayB.push(y)
    }
    arrayA = arrayB;
    return arrayA
}
function exo18(array) {
    let z = array.length
    return array[z-1];
}
function exo19(a, b ) {
    return a === b ? true : false;
}
function exo20(a) {
    return (a.length == 0) ? true : false;
    // a != null && a != NaN && 
}