#!/bin/sh

echo Stopping running containers...
cd ../../
docker-compose down
echo Done.