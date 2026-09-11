/**
 * ?????????????????????????????????????????????????????????????
 * JOUR 05 ? CHALLENGE
 * LE FILTRE ? INSULTES / CENSURE
 * ?????????????????????????????????????????????????????????????
 *
 * ?? MISSION
 * Contexte : Vous d?veloppez le syst?me de chat d'un jeu vid?o en ligne pour YouCode.
 *
 * Consignes :
 * 1. Vous avez une liste (tableau) de mots interdits : ["noob", "idiot", "nul"].
 * 2. Cr?ez une fonction filtrerMessage(message) qui re?oit le message tap? par le joueur.
 * 3. Si le message contient un des mots interdits (peu importe s'il y a des majuscules, ex: "nOOb"), il doit ?tre remplac? par des ast?risques de la m?me longueur (ex: "").
 * 4. Retournez le message censur?.
 *
 * Exemple de test :
 * filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!")
 * -> R?sultat attendu : "Tu es vraiment un GROS  et un * !!"
 *
 * ?? Consigne d?taill?e : ./README.md
 * ?? Commande : node day05/challenge/challenge.js
 */
'use strict';

const motsInterdits = ['noob', 'idiot', 'nul'];

function filtrerMessage(message) {
    return message.replace(/[\w?-?']+/g, (mot) => {
        const motNormalise = mot.toLowerCase();
        const estInterdit = motsInterdits.includes(motNormalise.replace(/[^a-z]/gi, ''));

        if (!estInterdit) {
            return mot;
        }

        const longueur = mot.replace(/[^a-z]/gi, '').length || 1;
        return '*'.repeat(longueur);
    });
}

console.log(filtrerMessage('Tu es vraiment un GROS NooB et un idiot !!'));
