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

# Step 2: Serve the Vite app using PM2
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist /app

# PM2와 serve 설치
RUN npm install -g pm2 serve

EXPOSE 3000

# ESM 모듈을 지원하기 위해 NODE_OPTIONS 설정 추가
ENV NODE_OPTIONS="--experimental-modules"

# PM2를 사용하여 serve 실행
CMD ["pm2-runtime", "serve", "-s", ".", "-l", "3000"]