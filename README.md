Projet-DEVOPS

  Projet DevOps : Déploiement d’une plateforme de Gestion des Tickets de Support IT 
Dans une entreprise moderne, les employés rencontrent fréquemment des problèmes techniques nécessitant l'intervention du service IT : pannes matérielles, bugs logiciels, accès refusé à certaines ressources, etc.

Une gestion efficace de ces incidents est cruciale pour assurer la productivité et le bon fonctionnement des services. Afin de répondre à ce besoin, votre équipe est chargée de concevoir et de déployer une plateforme web de gestion des tickets de support IT, permettant aux employés de soumettre des tickets de support IT et aux techniciens de les traiter de manière efficace.

L'application intégrera une architecture DevOps, incluant la gestion du code avec Git et GitHub pour le travail collaboratif, la conteneurisation avec Docker et Docker Compose pour faciliter le déploiement et la scalabilité, l'automatisation des déploiements avec Jenkins pour garantir un cycle de développement fluide et performant.

Chaque ticket de support correspond à une demande d'assistance soumise par un employé. Il contient les informations suivantes :

● Identifiant unique (id) : Numéro unique attribué au ticket.

● Titre (titre) : Courte description du problème (ex. : "Impossible de se connecter au VPN").

● Description détaillée (description) : Explication du problème rencontré.

● Statut (statut) : État actuel du ticket parmi :

○ "Ouvert" (créé mais non encore pris en charge)

○ "En cours" (en train d’être traité par un technicien)

○ "Résolu" (le problème est réglé)

○ "Fermé" (ticket définitivement archivé)

● Priorité (priorité) : Niveau d'urgence du problème : "Faible", "Moyenne", "Élevée", "Critique".

● Date de création (date_creation) : Date et heure de soumission du ticket.

● Date de mise à jour (date_mise_a_jour) : Dernière modification du ticket.

● Employé créateur (id_employe) : Identifiant de l’utilisateur ayant soumis le ticket.

● Technicien assigné (id_technicien) : Identifiant du technicien en charge du ticket (peut être NULL si non encore assigné).

Un ticket peut être mis à jour avec des commentaires et annotations pour suivre l’avancement de sa résolution. De plus, l’application gère plusieurs types d’utilisateurs, chacun ayant un rôle spécifique :

� � Employés :

● Peuvent soumettre des tickets.

● Peuvent consulter l’état de leurs tickets.

● Reçoivent des notifications lorsqu’un technicien met à jour un ticket.

� � Techniciens :

● Peuvent consulter la liste des tickets ouverts.

● Peuvent mettre à jour les tickets en indiquant les actions effectuées.

● Peuvent fermer un ticket une fois le problème résolu.

� � Administrateurs :

● Peuvent gérer les utilisateurs (ajouter/supprimer des techniciens et employés).

● Peuvent attribuer un technicien manuellement à un ticket.

● Ont accès à un tableau de bord pour suivre les statistiques :

par : M. ACHIR

○ Nombre total de tickets ouverts/résolus.

○ Temps moyen de résolution par technicien.

○ Priorisation des tickets critiques.

Chaque utilisateur est caractérisé par les informations suivantes : un identifiant unique (id), un nom (nom), un e-mail (email), mot de passe crypté (mot_de_passe), rôle ("Employé", "Technicien", "Admin"), date d’enregistrement de l’utilisateur (date_inscription).

Questions : - - - - - -

Quelle architecture choisissez-vous pour votre solution ? Monolithique ou microservices ?

Justifiez votre réponse en expliquant pourquoi ce choix est le plus adapté à votre projet.

Utilisez Git et github pour une organisation efficace du code source et l’amélioration de la collaboration au sein de votre équipe.

Concevoir et développer une application web fonctionnelle.

Le choix des frameworks frontend et backend, ainsi que celui de la base de données, est libre.

Identifier les étapes clés du pipeline CI/CD et proposer un Jenkinsfile automatisé pour gérer le build, la conteneurisation, le déploiement de votre application, etc.

Conteneuriser l’application et la déployer avec Docker Compose en multi-conteneurs.

Documenter toutes les étapes du projet avec des explications détaillées et des captures d’écran.

Le rapport doit inclure :

● Introduction et objectifs du projet.

● Choix de l’architecture et justification (monolithique ou microservices).*

● Organisation du répertoire git / GitHub (fournir le lien vers votre répertoire).

● Détails du développement de l’application (choix technologiques, fonctionnalités).

● Pipeline CI/CD avec Jenkins (explication + Jenkinsfile).

● Déploiement avec Docker et Docker Compose (dockerfiles et docker-compose.yml expliqués).

● Tests et captures d’écran des commandes exécutées.

● Difficultés rencontrées et améliorations possibles.

Soumettre le projet finalisé avec tous les fichiers nécessaires :

Code source complet de l’application, fichier docker-compose.yml, Fichier Jenkinsfile, Dockerfiles pour chaque service, rapport détaillé en format pdf et une vidéo de démonstration de la solution.

Ce projet a été réalisé par @Niangoran Esther BOKA,@Gemima ONDELE POUROU,@Assane BEYE AMAR,@Maxime CORNU sous la superivsion de la professeure Mme MERIEM ACHIR.
