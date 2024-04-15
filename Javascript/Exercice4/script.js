let nbre = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));

if (!isNaN(nbre)) {
    let tab = "Table de multiplication de " + nbre + " :\n";
    for (let i = 1; i <= 10; i++) {
        tab += nbre + " x " + i + " = " + (nbre * i) + "\n";
    }
    alert(tab);
} else {
    alert("Veuillez entrer un nombre valide.");
}
