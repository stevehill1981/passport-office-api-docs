# syntax = docker/dockerfile:1

# Stage 1: Build the Next.js application
FROM node:22-slim as build

# Set working directory
WORKDIR /opt/passport-office-api-docs

# Install dependencies first (for better caching)
COPY package.json package-lock.json ./
RUN npm ci --only=production && \
    npm cache clean --force

# Copy source files
COPY . .

# Build the application and export static files
RUN npm run build && \
    npm run export

# Stage 2: Serve the static files with nginx
FROM nginx:1.25.3

# Copy the static files from the build stage
COPY --from=build /opt/passport-office-api-docs/out /usr/share/nginx/html

# Add custom nginx configuration for better routing support
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ $uri.html /index.html; \
    } \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf