/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day07/exercices/exercice-18.js
 */
'use strict';

function sontIdentiques(obj1, obj2) {
  const cles1 = Object.keys(obj1);
  const cles2 = Object.keys(obj2);

  if (cles1.length !== cles2.length) {
    return false;
  }

  return cles1.every(
    (cle) =>
      Object.prototype.hasOwnProperty.call(obj2, cle) && obj1[cle] === obj2[cle],
  );
}

const objetA = { nom: 'Ali', age: 30 };
const objetB = { age: 30, nom: 'Ali' };

console.log(sontIdentiques(objetA, objetB));

