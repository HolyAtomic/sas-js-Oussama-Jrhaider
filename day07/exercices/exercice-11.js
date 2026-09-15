/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CLONAGE SIMPLE (SPREAD OPERATOR)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet original = { a: 1, b: 2 }. Utilisez la syntaxe "spread" (...) pour créer une copie copie qui n'est pas une référence, puis ajoutez c: 3 à la copie sans modifier l'original.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day07/exercices/exercice-11.js
 */
'use strict';

const original = { a: 1, b: 2 };
const copie = { ...original };

copie.c = 3;

console.log('Original :', original);
console.log('Copie :', copie);

