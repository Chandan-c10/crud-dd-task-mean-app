# docker/backend.Dockerfile
FROM node:18-alpine AS build

WORKDIR /usr/src/app
COPY backend/package*.json ./
RUN npm ci --only=production
COPY backend/ .

# If you need build step (e.g. transpile), add it here. For a plain Node app:
ENV NODE_ENV=production
EXPOSE 8080

CMD ["node", "server.js"]
