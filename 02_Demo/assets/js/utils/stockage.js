function enregisterDonneesLocale(nom, valeur) {
    // Enregistrez les données dans le stockage local
    localStorage.setItem(nom, valeur);
}

function recupererDonneesLocale(nom) {
    return localStorage.getItem(nom);
}
