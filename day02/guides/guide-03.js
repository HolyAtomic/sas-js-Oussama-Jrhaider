/**
 * JOUR 02 — GUIDE 03
 * Les boucles imbriquées (Grille)
 *
 * OBJECTIF
 * Affichez un carré de 3 lignes et 3 colonnes rempli d'étoiles *.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let i = 0

while (i < 3) {
  let ligne = ''
  let j = 0

  while (j < 3) {
    ligne += '*'
    j++
  }

  console.log(ligne)
  i++
}
