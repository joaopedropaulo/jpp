#!/bin/sh

echo Stopping running containers...
cd ../../
docker-compose down
echo Done.

echo Starting containers again...
docker-compose up -d
echo Done.

echo Showing container logs:
docker-compose logs -f