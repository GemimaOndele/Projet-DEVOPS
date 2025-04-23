# Utiliser l'image officielle de Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste (après avoir installé les dépendances)
COPY . .

# Exposer le port de l'application
EXPOSE 4000

# Lancer le serveur Express (dans src/index.js)
CMD ["node", "src/index.js"]
