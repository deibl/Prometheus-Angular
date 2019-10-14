FROM openjdk:8-jdk-alpine AS BUILD_IMAGE
ENV APP_HOME=/workspace/promangular/
WORKDIR $APP_HOME

COPY build.gradle gradlew settings.gradle ./
COPY src ./src
COPY gradle ./gradle

RUN ./gradlew bootJar
WORKDIR $APP_HOME/build/libs
RUN jar -xf promangular-1.0-SNAPSHOT.jar

FROM openjdk:8-jre-alpine
VOLUME /tmp
ARG DEPENDENCY=/workspace/promangular/build/libs
COPY --from=BUILD_IMAGE ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=BUILD_IMAGE ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=BUILD_IMAGE ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","com.promangular.Application"]
