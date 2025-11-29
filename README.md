In this DevOps task, you need to build and deploy a full-stack CRUD application using the MEAN stack (MongoDB, Express, Angular 15, and Node.js). The backend will be developed with Node.js and Express to provide REST APIs, connecting to a MongoDB database. The frontend will be an Angular application utilizing HTTPClient for communication.  

The application will manage a collection of tutorials, where each tutorial includes an ID, title, description, and published status. Users will be able to create, retrieve, update, and delete tutorials. Additionally, a search box will allow users to find tutorials by title.

## Project setup

### Node.js Server

cd backend

npm install

You can update the MongoDB credentials by modifying the `db.config.js` file located in `app/config/`.

Run `node server.js`

docker run 

docker build -t mean-backend .


### Angular Client

cd frontend

npm install

Run `ng serve --port 8081`

You can modify the `src/app/services/tutorial.service.ts` file to adjust how the frontend interacts with the backend.

Navigate to `http://localhost:8081/`






# CRUD-DD-TASK-MEAN-APP

## Overview
Full-stack MEAN CRUD application (Angular frontend + Node/Express backend + MongoDB). Containerized with Docker and deployed with Docker Compose. Nginx reverse proxy provides access on port 80.

## Repo structure
(briefly describe files)

## Prerequisites
- Docker & Docker Compose
- Docker Hub account
- Ubuntu VM on cloud provider
- SSH key configured for VM
- GitHub repo with Secrets:
  - DOCKERHUB_USERNAME
  - DOCKERHUB_TOKEN
  - VM_SSH_HOST
  - VM_SSH_USER
  - VM_SSH_KEY
  - REMOTE_DOCKER_COMPOSE_PATH

## Setup (local)
1. Clone repo
2. Build locally:
   - `docker compose build`
   - `docker compose up -d`
3. Visit `http://localhost`

## Deploy to cloud VM (manual)
1. Create Ubuntu VM, install Docker (see commands in instructions).
2. Copy repo or `docker-compose.yml` to VM (`/home/ubuntu/crud-dd-app`)
3. `docker compose up -d`

## CI/CD (GitHub Actions)
- On push to `main` workflow builds frontend & backend images and pushes them to Docker Hub.
- Then it SSHs to VM, copies `docker-compose.yml` and runs `docker compose pull && docker compose up -d`.

## Files to note
- `docker/backend.Dockerfile`
- `docker/frontend.Dockerfile`
- `docker/nginx-proxy.conf`
- `docker/frontend-nginx.conf`
- `.github/workflows/ci-cd.yml`

## Screenshots (include these)
1. CI/CD workflow run (Actions tab) showing build & push steps.
2. Docker Hub repositories showing pushed images.
3. VM `docker ps` showing running containers.
4. Application UI loaded at `http://<VM_IP>/` with CRUD functionality.
5. Nginx config & docker-compose showing ports.

## Troubleshooting
- If backend cannot connect to MongoDB: ensure `MONGO_URL` env var matches `mongodb://mongo:27017/todo_db`.
- If frontend routing fails: confirm `frontend-nginx.conf` is used inside frontend image and `try_files` fallback exists.

## License
MIT

Screen shot 

<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/0ddb46b1-0f4e-478f-8548-a5a55476199c" />

<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/920446b1-d88c-48fa-a0e0-1e715d9b4283" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/a174f0a4-fe12-4392-9fe7-ebe16dd7d82f" />




