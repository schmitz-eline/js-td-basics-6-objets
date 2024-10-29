/*****************************
 * 029-2 - Boucles pour parcourir des objets
 */

// 2. Boucle for/in pour parcourir des objets

/*
for(const prop in objet) {
  console.log(prop + " : " + objet[prop]);
}   
*/

/*
EXERCICE 1 : 
Parcours l'objet mesFruits pour afficher, pour chacun des fruits, "Le fruit … coûte … €"
*/
const mesFruits = {
  pomme: 1.3,
  poire: 0.5,
  ananas: 3
};

// Écris ton code ici
for (const fruit in mesFruits) {
  console.log("Le fruit " + fruit + " coûte " + mesFruits[fruit] + " €.");
}

/*
EXERCICE 2 :
Parcours l'objet fruit pour afficher chacune de ses propriétés avec, pour chacune, sa valeur
*/
const fruit = {
  nom: "Pomme",
  prix: 0.3,
  couleur: "Verte",
  variete: "Golden"
};

// Écris ton code ici
for (const prop in fruit) {
  console.log(prop + " : " + fruit[prop]);
}

// Un mot est un objet de type String => ceci fonctionne également…
/*
EXERCICE 3 :
Parcours le mot "Bonjour" pour afficher séparément chacune de ses lettres
*/
const mot = "Bonjour";

// Écris ton code ici
for (const lettre of mot) {
  console.log(lettre);
}