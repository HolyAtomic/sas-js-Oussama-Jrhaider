/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day07/exercices/exercice-20.js
 */
'use strict';

const original = {
  nom: 'Ali',
  infos: {
    ville: 'Paris',
  },
};

const copie = { ...original };

copie.infos.ville = 'Lyon';

console.log('Original :', original);
console.log('Copie :', copie);

const copieProfonde = structuredClone(original);
copieProfonde.infos.ville = 'Casablanca';

console.log('Original après deep copy :', original);
console.log('Copie profonde :', copieProfonde);

