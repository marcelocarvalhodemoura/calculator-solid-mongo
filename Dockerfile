# Usar a imagem oficial do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json para o container
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Instalar o TypeScript globalmente
RUN npm install -g typescript

# Copiar o código-fonte da aplicação
COPY . .

# Compilar o TypeScript para JavaScript
RUN tsc

# Expor a porta da aplicação
EXPOSE 3000

# Comando para rodar o código JavaScript compilado
CMD ["node", "dist/index.js"]