let nbrDC = parseInt(prompt("Combien de chiffres voulez-vous additionner ?"));
    let som = 0;

    for (let i = 0; i < nbrDC; i++) {
        let chiffre = parseInt(prompt("Entrez le chiffre " + (i + 1) + " :"));
        som += chiffre;
    }

    alert("La somme des chiffres est : " + som);