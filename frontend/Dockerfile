FROM node:18
WORKDIR /app
COPY ./package*.json ./
RUN ls -al /app
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
