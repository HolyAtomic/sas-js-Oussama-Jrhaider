/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CALCULATRICE MODULAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction calculatrice(a, b, signe). Utilisez un switch sur signe pour appeler l'une des 4 opérations de base (+, -, *, /) que vous aurez écrites en tant que fonctions distinctes.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day03/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
 
'use strict';

const na9is = (a, b) => a - b;
const za2id = (a, b) => a + b;
const darb = (a, b) => a * b;
const qisma = (a, b) => a / b;

function calculatrice(a, b, signe) {

    switch (signe) {

        case "*":
            return darb(a, b);

        case "/":
            return qisma(a, b);

        case "+":
            return za2id(a, b);

        case "-":
            return na9is(a, b);

        default:
            return "Signe invalide";
    }
}