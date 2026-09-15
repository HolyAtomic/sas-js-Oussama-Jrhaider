/**
 * JOUR 07 — GUIDE 03
 * Parcourir un Objet
 *
 * OBJECTIF
 * Affichez toutes les clés et leurs valeurs de l'objet voiture sous la forme "clé : valeur".
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

const voiture = {
  modele: 'Clio',
  couleur: 'rouge',
  annee: 2022,
};

for (const cle in voiture) {
  console.log(`${cle} : ${voiture[cle]}`);
}

