# Utiliser l'image officielle de Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json et package-lock.json
COPY ./package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du backend dans le conteneur
COPY . .

# Exposer le port où l'API sera servie
EXPOSE 4000

# Commande pour démarrer l'API backend
CMD ["node", "app.js"]
