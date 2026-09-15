/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FUSION D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez infoClient = { nom: "Ali" } et infoPaiement = { methode: "Carte" }. Fusionnez-les en un seul objet en utilisant Object.assign() ou le spread operator.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day07/exercices/exercice-13.js
 */
'use strict';

const infoClient = { nom: 'Ali' };
const infoPaiement = { methode: 'Carte' };

const profilComplet = { ...infoClient, ...infoPaiement };
console.log(profilComplet);

