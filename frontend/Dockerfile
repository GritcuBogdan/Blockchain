
FROM node:22.13.1-alpine AS build

WORKDIR /app


COPY package*.json /app/


RUN npm install


COPY . .


RUN npm run build


FROM node:22.13.1-alpine

WORKDIR /app


COPY --from=build /app/dist /app/dist
COPY --from=build /app/package*.json /app/


RUN npm install --production

RUN npm install -g serve


EXPOSE 5173


CMD ["serve", "-s", "dist", "-l", "5173"]
