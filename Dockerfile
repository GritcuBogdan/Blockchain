FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY target/TheBlockchain-1.0-SNAPSHOT.jar /app/TheBlockchain-1.0-SNAPSHOT.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/TheBlockchain-1.0-SNAPSHOT.jar"]