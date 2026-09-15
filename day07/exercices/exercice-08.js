/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

const candidats = [
  { nom: 'Alice', score: 12 },
  { nom: 'Bob', score: 18 },
  { nom: 'Charlie', score: 15 },
];

const meilleurCandidat = candidats.reduce((best, candidat) => {
  return candidat.score > best.score ? candidat : best;
}, candidats[0]);

console.log(meilleurCandidat.nom);

