
FROM eclipse-temurin:17-jdk-alpine AS builder


WORKDIR /app


RUN apk add --no-cache maven


COPY ./pom.xml /app/pom.xml
COPY ./WalletService/pom.xml /app/WalletService/pom.xml


COPY ./WalletService /app/WalletService


RUN mvn -f /app/WalletService/pom.xml clean install


FROM eclipse-temurin:17-jre-alpine AS runtime


WORKDIR /app


COPY --from=builder /app/WalletService/target/WalletService-1.0-SNAPSHOT.jar /app/WalletService-1.0-SNAPSHOT.jar


EXPOSE 8081

CMD ["java", "-jar", "/app/WalletService-1.0-SNAPSHOT.jar"]
