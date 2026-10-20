FROM node:22-bookworm-slim
WORKDIR /app
COPY package.json package-lock.json ./
COPY patches ./patches
RUN npm ci
COPY . .
RUN npm run build
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "dist/index.js"]
