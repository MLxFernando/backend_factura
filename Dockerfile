# Imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos del backend al contenedor
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto en el que corre el backend
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
