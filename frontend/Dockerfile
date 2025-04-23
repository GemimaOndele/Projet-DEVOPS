FROM node:18
WORKDIR /app
RUN echo "Contenu du répertoire /app AVANT la copie :"
RUN ls -al /app
COPY ./package*.json ./
RUN echo "Contenu du répertoire /app APRÈS la copie de package*json :"
RUN ls -al /app
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]