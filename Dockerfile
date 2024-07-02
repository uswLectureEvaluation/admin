# Step 1: Build the Vite app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
# 환경 변수 설정
ARG VITE_APP_SERVER_HOST
ENV VITE_APP_SERVER_HOST=${VITE_APP_SERVER_HOST}

RUN yarn build

# Step 2: Serve the Vite app using serve
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist /app

# serve 설치
RUN npm install -g serve

EXPOSE 3000

# serve 실행
CMD ["serve", "-s", ".", "-l", "3000"]
