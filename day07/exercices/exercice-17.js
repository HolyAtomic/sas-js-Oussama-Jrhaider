/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * NETTOYAGE DE SCRAPING AVEC DES OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez scrappé une liste de prix : [{ article: "PC", prix: "1500$" }, { article: "Souris", prix: "25$" }]. Écrivez une fonction qui modifie les objets pour que le prix devienne un vrai Number (enlever le "$").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day07/exercices/exercice-17.js
 */
'use strict';

const articles = [
  { article: 'PC', prix: '1500$' },
  { article: 'Souris', prix: '25$' },
];

const articlesNettoyes = articles.map((item) => ({
  ...item,
  prix: Number(item.prix.replace('$', '')),
}));

console.log(articlesNettoyes);

