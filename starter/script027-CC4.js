/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const mark = {
    nomMark:'Mark',
    poidsMark:69,
    tailleMark:1.8,
    bmi() {
        return this.poidsMark / (this.tailleMark * this.tailleMark);
    }
};
const john = {
    nomJohn:'John',
    poidsJohn:80,
    tailleJohn:1.65,
    bmi() {
        return this.poidsJohn / (this.tailleJohn * this.tailleJohn);
    }
};

console.log(`Le BMI de Mark est : ${mark.bmi()}`);
console.log(`Le BMI de John est : ${john.bmi()}`);
if (mark.bmi() > john.bmi()) {
    console.log("Le BMI de Mark est plus élevé que celui de John.");
} else if (mark.bmi() < john.bmi()) {
    console.log("Le BMI de John est plus élevé que celui de Mark.");
} else if (mark.bmi() === john.bmi()) {
    "Le BMI de Mark est le même que celui de John."
}