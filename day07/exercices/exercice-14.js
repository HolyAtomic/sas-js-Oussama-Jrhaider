/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * DESTRUCTURATION (DESTRUCTURING)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Soit let etudiant = { prenom: "Sara", ville: "Rabat", note: 16 }. En une seule ligne de code, extrayez le prénom et la ville dans deux variables distinctes portant le même nom.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day07/exercices/exercice-14.js
 */
'use strict';

let etudiant = { prenom: 'Sara', ville: 'Rabat', note: 16 };
const { prenom, ville } = etudiant;

console.log(prenom, ville);

