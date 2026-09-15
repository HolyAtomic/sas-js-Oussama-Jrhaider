/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 05 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * EXTRACTION DES CLÉS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Utilisez Object.keys() sur votre objet utilisateur pour récupérer un tableau contenant toutes ses clés, et affichez sa longueur.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-05
 * ▶️ Commande : node day07/exercices/exercice-05.js
 */
'use strict';

const utilisateur = {
  nom: 'Oussama',
  age: 22,
  email: 'Jrhaider@example.com',
};

const cles = Object.keys(utilisateur);
console.log(cles);
console.log(cles.length);

