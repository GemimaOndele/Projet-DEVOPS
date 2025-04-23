# Projet Backend

Ce README fournit toutes les commandes nécessaires pour configurer et exécuter le projet backend.

## Prérequis

Assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instructions de Configuration

1. **Cloner le dépôt** :
    ```bash
    echo "Clonage du dépôt..."
    git clone <repository-url>
    cd backend
    ```

2. **Installer les dépendances** :
    ```bash
    echo "Installation des dépendances avec npm..."
    npm install
    ```
    Ou, si vous utilisez Yarn :
    ```bash
    echo "Installation des dépendances avec Yarn..."
    yarn install
    ```

3. **Configurer les variables d'environnement** :
    Créez un fichier `.env` à la racine du projet et configurez-le selon vos besoins. Exemple :
    ```bash
    echo "Configuration des variables d'environnement..."
    ```
    Exemple de contenu du fichier `.env` :
    ```
    PORT=3000
    DATABASE_URL=your_database_url
    ```

4. **Exécuter les migrations de base de données** (si applicable) :
    ```bash
    echo "Exécution des migrations de base de données avec npm..."
    npm run migrate
    ```
    Ou :
    ```bash
    echo "Exécution des migrations de base de données avec Yarn..."
    yarn migrate
    ```

5. **Démarrer le serveur de développement** :
    ```bash
    echo "Démarrage du serveur de développement avec npm..."
    npm run dev
    ```
    Ou :
    ```bash
    echo "Démarrage du serveur de développement avec Yarn..."
    yarn dev
    ```

## Commandes Supplémentaires

- **Exécuter les tests** :
  ```bash
  echo "Exécution des tests avec npm..."
  npm test
  ```
  Ou :
  ```bash
  echo "Exécution des tests avec Yarn..."
  yarn test
  ```

- **Construire pour la production** :
  ```bash
  echo "Construction pour la production avec npm..."
  npm run build
  ```
  Ou :
  ```bash
  echo "Construction pour la production avec Yarn..."
  yarn build
  ```

- **Démarrer le serveur en production** :
  ```bash
  echo "Démarrage du serveur en production avec npm..."
  npm start
  ```
  Ou :
  ```bash
  echo "Démarrage du serveur en production avec Yarn..."
  yarn start
  ```

## Notes

- Remplacez `<repository-url>` par l'URL réelle de votre dépôt.
- Assurez-vous que la base de données est correctement configurée avant d'exécuter les migrations.
