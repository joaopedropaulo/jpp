#!/bin/sh

echo Stopping running containers...
docker-compose down
echo Done.

echo Deleting existing images...
docker image rm jpp_server
echo Done.

echo Building new images...
docker-compose build jpp_server
echo Done.

echo Starting containers again...
docker-compose up -d
echo Done.

echo Showing container logs:
docker-compose logs -f