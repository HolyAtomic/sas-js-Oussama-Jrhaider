/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * REGROUPEMENT (GROUP BY)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau [{nom: "A", groupe: 1}, {nom: "B", groupe: 2}, {nom: "C", groupe: 1}]. Créez une fonction qui retourne un objet regroupant ces données : { 1: [{nom: "A"}, {nom: "C"}], 2: [{nom: "B"}] }.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day07/exercices/exercice-19.js
 */
'use strict';

function regrouperParGroupe(personnes) {
  return personnes.reduce((groupe, personne) => {
    const idGroupe = personne.groupe;

    if (!groupe[idGroupe]) {
      groupe[idGroupe] = [];
    }

    groupe[idGroupe].push({ nom: personne.nom });
    return groupe;
  }, {});
}

const personnes = [
  { nom: 'A', groupe: 1 },
  { nom: 'B', groupe: 2 },
  { nom: 'C', groupe: 1 },
];

console.log(regrouperParGroupe(personnes));

