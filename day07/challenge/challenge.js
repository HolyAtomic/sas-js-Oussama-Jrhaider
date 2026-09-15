/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day07/challenge/challenge.js
 */
'use strict';

const utilisateurs = [];

function ajouterUtilisateur(nom, email) {
  const id = utilisateurs.length ? Math.max(...utilisateurs.map((u) => u.id)) + 1 : 1;
  const utilisateur = { id, nom, email };
  utilisateurs.push(utilisateur);
  return utilisateur;
}

function trouverParEmail(email) {
  return utilisateurs.find((utilisateur) => utilisateur.email === email) ?? null;
}

function supprimerParId(id) {
  const index = utilisateurs.findIndex((utilisateur) => utilisateur.id === id);
  if (index !== -1) {
    utilisateurs.splice(index, 1);
  }
}

function afficherAnnuaire() {
  console.log('Annuaire :');
  utilisateurs.forEach((utilisateur) => {
    console.log(`ID ${utilisateur.id} - ${utilisateur.nom} (${utilisateur.email})`);
  });
}

ajouterUtilisateur('Alice', 'alice@example.com');
ajouterUtilisateur('Bob', 'bob@example.com');
console.log(trouverParEmail('alice@example.com'));
supprimerParId(1);
afficherAnnuaire();
