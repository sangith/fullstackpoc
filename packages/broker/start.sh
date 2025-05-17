# Start Postgres
docker run --name pact-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=pact_broker -p 5432:5432 -d postgres

# Start Pact Broker linked to Postgres
docker run -d --name pact-broker -p 9292:9292 -e PACT_BROKER_DATABASE_ADAPTER=postgres -e PACT_BROKER_DATABASE_HOST=host.docker.internal -e PACT_BROKER_DATABASE_USERNAME=postgres -e PACT_BROKER_DATABASE_PASSWORD=postgres -e PACT_BROKER_DATABASE_NAME=pact_broker pactfoundation/pact-broker
