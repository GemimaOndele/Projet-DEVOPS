@echo off
echo === Mise à jour du README.md par Assane ===

:: Chemin du fichier README.md
set README_FILE=README.md

:: Vérifier si le README existe
if not exist "%README_FILE%" (
    echo Le fichier README.md n'a pas été trouvé.
    echo Création du fichier README.md...
    echo # Projet DEVOPS - Plateforme de Gestion des Tickets de Support IT > %README_FILE%
    echo. >> %README_FILE%
    echo ## Description >> %README_FILE%
    echo Ce projet consiste à développer une plateforme de gestion des tickets de support IT, en utilisant une architecture en microservices. Le projet inclut un frontend (React) et un backend (Node.js). >> %README_FILE%
    echo. >> %README_FILE%
    echo ## Prérequis >> %README_FILE%
    echo - **Docker** doit être installé sur votre machine. Vous pouvez installer Docker en suivant les instructions officielles ici : [Installation de Docker](https://docs.docker.com/get-docker/) >> %README_FILE%
    echo - **Docker Compose** doit être installé. Pour l'installer, suivez les instructions ici : [Installation de Docker Compose](https://docs.docker.com/compose/install/) >> %README_FILE%
    echo. >> %README_FILE%
    echo ## Démarrer l'application avec Docker >> %README_FILE%
    echo 1. Clonez ce repository : >> %README_FILE%
    echo ```bash >> %README_FILE%
    echo git clone https://github.com/GemimaOndele/Projet-DEVOPS.git >> %README_FILE%
    echo cd Projet-DEVOPS >> %README_FILE%
    echo ``` >> %README_FILE%
    echo. >> %README_FILE%
    echo 2. Construisez les images Docker pour le frontend et le backend : >> %README_FILE%
    echo ```bash >> %README_FILE%
    echo docker build -f frontend/Dockerfile -t tickets-frontend ./frontend >> %README_FILE%
    echo docker build -f backend/ticket-service/Dockerfile -t tickets-backend ./backend/ticket-service >> %README_FILE%
    echo ``` >> %README_FILE%
    echo. >> %README_FILE%
    echo 3. Démarrez les conteneurs avec Docker Compose : >> %README_FILE%
    echo ```bash >> %README_FILE%
    echo docker-compose -f infrastructure/docker-compose.yml up -d >> %README_FILE%
    echo ``` >> %README_FILE%
    echo Cette commande va : >> %README_FILE%
    echo - Lancer un conteneur MongoDB. >> %README_FILE%
    echo - Lancer l'API backend (Node.js). >> %README_FILE%
    echo - Lancer le frontend (React). >> %README_FILE%
    echo. >> %README_FILE%
    echo 4. Accédez à l'application : >> %README_FILE%
    echo - **Frontend** : Ouvrez votre navigateur et allez sur [http://localhost:3000](http://localhost:3000). >> %README_FILE%
    echo - **Backend** : L'API sera disponible sur [http://localhost:4000](http://localhost:4000). >> %README_FILE%
    echo. >> %README_FILE%
    echo ## Arrêter les conteneurs >> %README_FILE%
    echo Pour arrêter les conteneurs et nettoyer les ressources Docker : >> %README_FILE%
    echo ```bash >> %README_FILE%
    echo docker-compose down >> %README_FILE%
    echo ``` >> %README_FILE%
    echo. >> %README_FILE%
    echo ## CI/CD avec Jenkins >> %README_FILE%
    echo Jenkins est utilisé pour l'automatisation de la construction et du déploiement. Assurez-vous que Jenkins est configuré avec les bonnes clés d'accès au dépôt et qu'il dispose de Docker installé pour exécuter les étapes de build et de déploiement dans le pipeline CI/CD. >> %README_FILE%
    echo. >> %README_FILE%
    echo ## Structure du Projet >> %README_FILE%
    echo ``` >> %README_FILE%
    echo ├── backend/ >> %README_FILE%
    echo │   ├── ticket-service/ >> %README_FILE%
    echo │   │   ├── Dockerfile >> %README_FILE%
    echo │   │   ├── app.js >> %README_FILE%
    echo │   │   ├── package.json >> %README_FILE%
    echo │   │   └── ... >> %README_FILE%
    echo ├── frontend/ >> %README_FILE%
    echo │   ├── Dockerfile >> %README_FILE%
    echo │   ├── public/ >> %README_FILE%
    echo │   ├── src/ >> %README_FILE%
    echo │   ├── package.json >> %README_FILE%
    echo │   └── ... >> %README_FILE%
    echo ├── infrastructure/ >> %README_FILE%
    echo │   ├── docker-compose.yml >> %README_FILE%
    echo │   ├── Dockerfile.frontend >> %README_FILE%
    echo │   ├── Dockerfile.ticket-service >> %README_FILE%
    echo │   └── Jenkinsfile >> %README_FILE%
    echo ├── README.md >> %README_FILE%
    echo └── ... >> %README_FILE%
    echo ``` >> %README_FILE%
    echo. >> %README_FILE%
    echo ## Notes >> %README_FILE%
    echo - Assurez-vous d'avoir bien configuré vos variables d'environnement dans le backend pour que l'application puisse se connecter à MongoDB. >> %README_FILE%
    echo - Le projet utilise **Docker Compose** pour orchestrer les services. >> %README_FILE%
    echo === README.md mis à jour avec succès ! ===
    pause
) else (
    echo Le fichier README.md existe déjà, mise à jour en cours...
    echo Mise à jour des sections Docker dans le fichier README.md...
    :: Ajouter ou mettre à jour la section Docker dans le README
    echo ## Démarrer l'application avec Docker >> %README_FILE%
    echo 1. Clonez ce repository : >> %README_FILE%
    echo ```bash >> %README_FILE%
    echo git clone https://github.com/GemimaOndele/Projet-DEVOPS.git >> %README_FILE%
    echo cd Projet-DEVOPS >> %README_FILE%
    echo ``` >> %README_FILE%
    echo. >> %README_FILE%
    echo 2. Construisez les images Docker pour le frontend et le backend : >> %README_FILE%
    echo ```bash >> %README_FILE%
    echo docker build -f frontend/Dockerfile -t tickets-frontend ./frontend >> %README_FILE%
    echo docker build -f backend/ticket-service/Dockerfile -t tickets-backend ./backend/ticket-service >> %README_FILE%
    echo ``` >> %README_FILE%
    echo. >> %README_FILE%
    echo 3. Démarrez les conteneurs avec Docker Compose : >> %README_FILE%
    echo ```bash >> %README_FILE%
    echo docker-compose -f infrastructure/docker-compose.yml up -d >> %README_FILE%
    echo ``` >> %README_FILE%
    echo Cette commande va : >> %README_FILE%
    echo - Lancer un conteneur MongoDB. >> %README_FILE%
    echo - Lancer l'API backend (Node.js). >> %README_FILE%
    echo - Lancer le frontend (React). >> %README_FILE%
    echo. >> %README_FILE%
    echo 4. Accédez à l'application : >> %README_FILE%
    echo - **Frontend** : Ouvrez votre navigateur et allez sur [http://localhost:3000](http://localhost:3000). >> %README_FILE%
    echo - **Backend** : L'API sera disponible sur [http://localhost:4000](http://localhost:4000). >> %README_FILE%
    echo. >> %README_FILE%
    echo Mise à jour terminée !
    pause
)

