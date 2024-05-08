class Pointage {
    constructor(pointDepart, elementHTML) {
        this.points = pointDepart;
        this.elementHTML = elementHTML;
        this.afficherPoints();
        // Ajoutez des commentaires pour expliquer ce que fait le constructeur
    }

    ajouterPoints(pointsAAjouter) {
        this.points += pointsAAjouter;
    }

    afficherPoints() {
        this.elementHTML.textContent = `${this.points} pts`;
    }

    calculerPourcentage(nbQuestions) {
        // Retourner le pourcentage de bonnes réponses
    }
}

export default Pointage;
