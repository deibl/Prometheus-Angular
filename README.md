# Micrometer / Prometheus showcase

Small project, showcasing micrometer (together wir Prometheus), written using Angular (for training purposes - never used it before :-) ).

## Getting Started

### Prerequisites

- Java 8 SDK
- Docker + Docker-Compose (optional, in case you want to excess Prometheus and Grafana)

## Start using docker

To build the application, and start it (together with Prometheus, Grafana and some other helpfull services)
```shel
docker-compose up
```

To stop the application run
```shel
docker-compose down
```

When having done changes run docker-compose build or add --build as parameter when running docker-compose up, to include 
those changes.

when the containers are running you can access the following:

- http://localhost:8080 the application
- http://localhost:8080/actuator/prometheus Prometheus endpoint
- http://localhost:3000 Grafana - Dashboard for data visualization admin:foobar
- http://localhost:9090 Prometheus - Monitoring System
- http://localhost:9093 Alertmanager - as the name implies, managing alerts, based on Prometheus metrics
- http://localhost:8082 cAdvisor - Hardware resource metrics
- http://localhost:9100 Node-Exporter - Container resource metrics

## Start using gradle

If you only want to run the application without the containers you can simply start the Application class via your IDE or
start the the jar, build via running
```shel
./gradlew bootJar
```

## Start the frontend

To start the frontend run
```shel
ng serve --open
```
within the angular-client directory.
