/**
 * Vérifie si un élément est vide ou non
 * @param {*} element
 * @returns {boolean} true si l'élément est vide, sinon false
 */
export function estVide(element) {
    // Si l'élément est indéfini ou null, retournez true
    if (element === undefined || element === null) return true;

    // Si l'élément est un tableau, vérifiez s'il est vide
    if (Array.isArray(element)) {
        return element.length === 0;
    }

    // Si l'élément est un objet, vérifiez s'il est vide
    if (typeof element === "object") {
        return Object.keys(element).length === 0;
    }

    // Si l'élément est une instance de Date, il n'est pas considéré comme vide
    if (element instanceof Date) {
        return false;
    }

    // Si l'élément est un nombre, il n'est pas considéré comme vide
    if (typeof element === "number") {
        return false;
    }

    // Si l'élément est un booléen, il n'est pas considéré comme vide
    if (typeof element === "boolean") {
        return false;
    }

    // Si l'élément est une chaîne, vérifiez si elle est vide après avoir supprimé les espaces blancs
    if (typeof element === "string") {
        return element.trim() === "";
    }

    //Si c'est un élément html
    if (element instanceof HTMLElement) {
        return false;
    }

    //Si c'est une collection d'éléments html
    if (element instanceof HTMLCollection) {
        return element.length === 0;
    }

    // Si aucun des cas ci-dessus n'est vrai, retournez false
    return false;
}

export function nettoyerValeurChamp(valeur) {
    // Échappe les caractères spéciaux HTML
    let valeurNettoyee = valeur.trim().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return valeurNettoyee;
}

/**
 * Vérifie si un email est valide
 * @param {string} courriel
 * @returns {boolean} true si l'email est valide, sinon false
 */
export function estCourriel(courriel) {
    // Définition de l'expression régulière pour valider l'email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Test de l'expression régulière sur l'email
    return emailRegex.test(courriel);
}

export function estDate(date) {
    // Définition de l'expression régulière pour valider la date
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    // Test de l'expression régulière sur la date
    return dateRegex.test(date);
}
