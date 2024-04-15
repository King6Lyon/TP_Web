let jrS= ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

let nJr = parseInt(prompt("Entrez un chiffre de 1 à 7 pour afficher le jour de la semaine :"));

if (nJr >= 1 && nJr <= 7) {
    let jour = jrS[nJr - 1];
    alert("Le jour correspondant est : " + jour);
} else {
    alert("Veuillez saisir un chiffre entre 1 et 7.");
}
