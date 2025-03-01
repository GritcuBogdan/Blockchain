
FROM eclipse-temurin:17-jdk-alpine AS builder


WORKDIR /app


RUN apk add --no-cache maven


COPY ./pom.xml /app/pom.xml
COPY ./UserManagementService/pom.xml /app/UserManagementService/pom.xml


COPY ./UserManagementService /app/UserManagementService


RUN mvn -f /app/UserManagementService/pom.xml clean install


FROM eclipse-temurin:17-jre-alpine AS runtime


WORKDIR /app


COPY --from=builder /app/UserManagementService/target/UserManagementService-1.0-SNAPSHOT.jar /app/UserManagementService-1.0-SNAPSHOT.jar


EXPOSE 8080

CMD ["java", "-jar", "/app/UserManagementService-1.0-SNAPSHOT.jar"]
