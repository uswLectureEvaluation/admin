# Step 1: Build the Vite app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# Step 2: Serve the Vite app using PM2
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist /app

RUN npm install -g pm2

COPY ecosystem.config.js ./

EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js"]