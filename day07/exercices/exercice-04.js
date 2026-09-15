/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 04 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * VÉRIFICATION D'EXISTENCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction possedePropriete(obj, cle) qui retourne true si la clé existe dans l'objet, sinon false. *(Indice : vous pouvez utiliser l'opérateur in ou vérifier si c'est !== undefined)*.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-04
 * ▶️ Commande : node day07/exercices/exercice-04.js
 */
'use strict';

function possedePropriete(obj, cle) {
  return Object.prototype.hasOwnProperty.call(obj, cle);
}

const utilisateur = {
  nom: 'Oussama',
  age: 22,
};

console.log(possedePropriete(utilisateur, 'nom'));
console.log(possedePropriete(utilisateur, 'email'));

function possedePropriete(obj, cle){
    return obj in cle
}