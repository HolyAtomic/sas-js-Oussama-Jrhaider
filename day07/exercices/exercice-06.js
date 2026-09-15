/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 06 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * EXTRACTION DES VALEURS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Utilisez Object.values() pour récupérer un tableau contenant toutes les valeurs de l'objet, et affichez-le.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-06
 * ▶️ Commande : node day07/exercices/exercice-06.js
 */
'use strict';

const utilisateur = {
  nom: 'Oussama',
  age: 22,
  email: 'Jrhaider@example.com',
};

const valeurs = Object.values(utilisateur);
console.log(valeurs);

