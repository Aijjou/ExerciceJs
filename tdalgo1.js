
// ** exercice 1 **

console.log('Solution Exercice 1 : ');

var AB = 5;
var AC = 5;
var BC = 5;
var CB = 4;
var CA = 5;
var BA = 5;

if (AB == AC) {
    if (AC == BC) {
        console.log('triangle equilateral')
    }
    else
        if (BC == BA) {
            console.log('triangle isocel en B')
        }
        else
            if (CA == CB) {
                console.log('triangle isocel en C');
            }
            else {
                console.log('aucun n est egaux');


            }
}


//  ** Exercice 2 **

console.log('Solution Exercice 2 : ');
var taillepersonne = 183;
var taillevetement;
var poidspersonne = 43;

if (taillepersonne < 172 && poidspersonne <= 47
    || taillepersonne < 169 && poidspersonne <= 53
    || taillepersonne < 166 && poidspersonne <= 59
    || taillepersonne < 163 && poidspersonne <= 65) {

    taillevetement = 1;

    console.log('vous êtes de taille :', taillevetement);

} else
    if (taillepersonne < 183 && poidspersonne <= 53
        || taillepersonne < 178 && poidspersonne <= 59
        || taillepersonne < 175 && poidspersonne <= 65
        || taillepersonne < 172 && poidspersonne <= 71) {

        taillevetement = 2;

        console.log('vous êtes de taille :', taillevetement);
    } else
        if (taillepersonne >= 178 && poidspersonne >= 54
            || taillepersonne >= 175 && poidspersonne >= 60
            || taillepersonne >= 172 && poidspersonne >= 66
            || taillepersonne >= 163 && poidspersonne >= 72) {

            taillevetement = 3;

            console.log('vous êtes de taille :', taillevetement);
        }
        else {

            console.log('votre taille n existe pas');

        }

//  ** Exercice 3 **

console.log('Solution Exercice 2 : Partie 1');

var c = 10000;
var t = 3;
var n = 5;
var cDouble = c * 2;
var compte = 0;

for (i = 0; i < n; i++) {

    c = c * (1 + (t / 100));

}
console.log('Le capital sera de', c, 'au bout de', n, 'année avec un taux de', t, '%');

console.log('Solution Exercice 2 : Partie 2');

while (c < cDouble) {
    c = c * (1 + (t / 100));
    compte ++;
}
n = compte;
console.log('Il faudra', n, 'années pour que le capital soit doublé.' );