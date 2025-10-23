# Imagen base oficial de Node.js
FROM node:18

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código

COPY . .

# Exponer el puerto (si tuviera servidor, aquí es opcional)
EXPOSE 3000

# Comando por defecto (puedes usar npm start o node app.js)
CMD ["node", "app.js"]