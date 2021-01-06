// Exo8

let jourSemaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
let question = prompt("Jour de la semaine?").toLowerCase();

// if (question == jourSemaine[jourSemaine.indexOf('lundi')] || question == jourSemaine[jourSemaine.indexOf('mardi')] || question == jourSemaine[jourSemaine.indexOf('mercredi')]  ) {
//     console.log('Vous êtes en e-learning');
// } else if (question == jourSemaine[jourSemaine.indexOf('jeudi')] || question == jourSemaine[jourSemaine.indexOf('vendredi')]) {
//     console.log('on est à MG');
// } else {
//     console.log(`Cette option n'est pas valable`);
// }


if (jourSemaine.indexOf(question) >= 0 && jourSemaine.indexOf(question) <= 2) {
    console.log('Vous êtes en e-learning');

} else if (jourSemaine.indexOf(question) >= 2 && jourSemaine.indexOf(question) <= jourSemaine.length) {
    console.log('on est à MG');

} else {
    console.log(`Cette option n'est pas valable`);
}
