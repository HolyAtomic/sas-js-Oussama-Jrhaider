/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * MÉTHODE D'OBJET (THIS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet compteBancaire avec une propriété solde et une méthode deposer(montant). La méthode doit utiliser this.solde pour augmenter le solde actuel.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day07/exercices/exercice-12.js
 */
'use strict';

const compteBancaire = {
  solde: 100,
  deposer(montant) {
    this.solde += montant;
    return this.solde;
  },
};

console.log(compteBancaire.deposer(50));

