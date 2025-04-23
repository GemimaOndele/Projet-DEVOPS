# Utiliser l'image officielle de Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json et package-lock.json
COPY ./package.json ./
COPY ./package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du frontend dans le conteneur
COPY . .

# Exposer le port où l'application React sera servie
EXPOSE 3000

# Commande pour démarrer l'application frontend
CMD ["npm", "start"]
