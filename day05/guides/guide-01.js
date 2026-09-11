/**
 * JOUR 05 ? GUIDE 01
 * Extraire une sous-cha?ne
 *
 * OBJECTIF
 * On vous donne une date au format ISO "2024-10-15". R?cup?rez uniquement l'ann?e.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

const dateIso = "2024-10-15";
const annee = dateIso.slice(0, 4);

console.log(annee);
