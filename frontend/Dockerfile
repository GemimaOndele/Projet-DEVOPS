# Étape 1 : Build de l'application
FROM node:18 as build

# Définir le dossier de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste (code source)
COPY . .

# Construire l'application (génère le dossier "build" dans React)
RUN npm run build

# Étape 2 : Serveur nginx pour servir l'app statique
FROM nginx:alpine

# Copier les fichiers de build dans le dossier de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copier un fichier de config nginx custom (facultatif)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
