
FROM eclipse-temurin:17-jdk-alpine as builder
WORKDIR /app


RUN apk add --no-cache maven

COPY . /app
RUN mvn clean install -DskipTests


FROM eclipse-temurin:17-jre-alpine
VOLUME /tmp
COPY --from=builder /app/target/TheBlockchain-1.0-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
