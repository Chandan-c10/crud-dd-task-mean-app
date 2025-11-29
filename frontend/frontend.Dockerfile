# docker/frontend.Dockerfile
# build stage
FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
# install angular cli if project uses ng build from local setup
RUN npm run build -- --prod --output-path=dist

# final stage - nginx
FROM nginx:alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
# Replace default nginx conf to support SPA routing
COPY docker/frontend-nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
