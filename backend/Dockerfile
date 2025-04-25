FROM node:18

# Installe les outils nécessaires pour la compilation de dépendances natives
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    sqlite3 \
    && rm -rf /var/lib/apt/lists/*

# Crée et définit le répertoire de travail dans le conteneur
WORKDIR /app
COPY .env .env
# Copie package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Nettoie les dépendances existantes (si déjà présentes)
RUN rm -rf node_modules

# Installe les dépendances du projet
RUN npm install --build-from-source

# Copie le reste des fichiers du projet
COPY . .

# Expose le port pour l'application
EXPOSE 4000

# Commande pour démarrer l'application
CMD ["node", "app.js"]
