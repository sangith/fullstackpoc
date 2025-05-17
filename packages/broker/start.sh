# Start Postgres
if [ "$(docker ps -q -f name=pact-postgres)" ]; then
  echo "pact-postgres is already running."
elif [ "$(docker ps -a -q -f name=pact-postgres)" ]; then
  echo "Starting existing pact-postgres container..."
  docker start pact-postgres
else
  echo "Creating and starting new pact-postgres container..."
  docker run --name pact-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=pact_broker -p 5432:5432 -d postgres
fi

# Start Pact Broker linked to Postgres
if [ "$(docker ps -q -f name=pact-broker)" ]; then
  echo "pact-broker is already running."
elif [ "$(docker ps -a -q -f name=pact-broker)" ]; then
  echo "Starting existing pact-broker container..."
  docker start pact-broker
else
  echo "Creating and starting new pact-broker container..."
  docker run -d --name pact-broker -p 9292:9292 -e PACT_BROKER_DATABASE_ADAPTER=postgres -e PACT_BROKER_DATABASE_HOST=host.docker.internal -e PACT_BROKER_DATABASE_USERNAME=postgres -e PACT_BROKER_DATABASE_PASSWORD=postgres -e PACT_BROKER_DATABASE_NAME=pact_broker pactfoundation/pact-broker
fi
