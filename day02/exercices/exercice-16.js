/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SAPIN CENTRÉ
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Allez plus loin, dessinez une pyramide centrée de 5 lignes :
 *
 *     *
 *    *
 *   *
 *  *
 * -
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day02/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let ligne = 1;
while (ligne <= 5) {
	let texte = "";
	let espace = 1;
	while (espace <= 5 - ligne) {
		texte += " ";
		espace++;
	}
	let etoile = 1;
	while (etoile <= ligne * 2 - 1) {
		texte += "*";
		etoile++;
	}
	console.log(texte);
	ligne++;
}
 
