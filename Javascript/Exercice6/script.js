let chaine = prompt("Entrez une chaîne de caractères :");
if (chaine.length >= 2) {
    let resultat = chaine.slice(1, -1);
    alert("La chaîne sans le premier ni le dernier caractère est : " + resultat);
} else {
    alert("Veuillez saisir une chaîne contenant au moins deux caractères.");
}
