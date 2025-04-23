# Utiliser l'image officielle de Node.js
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances en premier (cela permet d'utiliser le cache Docker si les deps ne changent pas)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel l'app tourne
EXPOSE 4000

# Lancer l'application
CMD ["node", "app.js"]
