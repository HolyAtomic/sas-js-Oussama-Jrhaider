/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 03 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * SUPPRESSION
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Supprimez la propriété estAdmin de l'objet utilisateur.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-03
 * ▶️ Commande : node day07/exercices/exercice-03.js
 */
'use strict';

const utilisateur = {
  nom: 'Oussama',
  age: 22,
  estAdmin: false,
};

delete utilisateur.estAdmin;

console.log(utilisateur);
