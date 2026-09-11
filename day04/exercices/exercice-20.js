/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * MÉMOÏSATION (CACHE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui simule un long calcul. Ajoutez-y un "cache" (un objet ou une variable externe) qui enregistre les résultats précédents. Si la fonction est rappelée avec le même paramètre, elle retourne le résultat stocké au lieu de refaire le calcul.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day03/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function creerCalculAvecCache() {
	const cache = {};

	return function calculer(nombre) {
		if (Object.prototype.hasOwnProperty.call(cache, nombre)) {
			return cache[nombre];
		}

		let resultat = 0;
		let compteur = 0;
		while (compteur <= nombre) {
			resultat += compteur;
			compteur++;
		}

		cache[nombre] = resultat;
		return resultat;
	};
}

const calculerAvecCache = creerCalculAvecCache();
console.log(calculerAvecCache(100));
console.log(calculerAvecCache(100));

