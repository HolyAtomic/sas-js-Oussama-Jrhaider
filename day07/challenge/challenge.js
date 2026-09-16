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
    const id = utilisateurs.length + 1;

    const utilisateur = {
        id: id,
        nom: nom,
        email: email
    };

    utilisateurs.push(utilisateur);

    return utilisateur;
}

function trouverParEmail(email) {
    let i = 0;

    while (i < utilisateurs.length) {
        if (utilisateurs[i].email === email) {
            return utilisateurs[i];
        }

        i++;
    }

    return null;
}

function supprimerParId(id) {
    let i = 0;

    while (i < utilisateurs.length) {
        if (utilisateurs[i].id === id) {
            utilisateurs.splice(i, 1);
            return;
        }

        i++;
    }
}

function afficherAnnuaire() {
    console.log("Annuaire :");

    let i = 0;

    while (i < utilisateurs.length) {
        console.log(
            `ID ${utilisateurs[i].id} - ${utilisateurs[i].nom} (${utilisateurs[i].email})`
        );

        i++;
    }
}

ajouterUtilisateur("amine", "amine@example.com");
ajouterUtilisateur("oussam", "oussam@example.com");

console.log(trouverParEmail("amine@example.com"));

supprimerParId(1);

afficherAnnuaire();