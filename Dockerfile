# Usa una imagen base de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]