/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
 */
'use strict';

const candidats = [
  { nom: 'Alice', score: 12 },
  { nom: 'Bob', score: 8 },
  { nom: 'Charlie', score: 15 },
  { nom: 'Dina', score: 9 },
];

const candidatsSelectionnes = candidats.filter((candidat) => candidat.score >= 10);
console.log(candidatsSelectionnes);

