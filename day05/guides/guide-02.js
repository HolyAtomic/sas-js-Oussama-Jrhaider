/**
 * JOUR 05 ? GUIDE 02
 * Recherche de mot-cl? (Sensibilit? ? la casse)
 *
 * OBJECTIF
 * V?rifiez si le mot "javascript" est pr?sent dans la phrase "J'apprends le JavaScript ? YouCode". La recherche doit ignorer les majuscules/minuscules.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

const phrase = "J'apprends le JavaScript ? YouCode";
const mot = "javascript";

console.log(phrase.toLowerCase().includes(mot.toLowerCase()));
