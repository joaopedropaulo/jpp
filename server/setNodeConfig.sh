#!/bin/sh
set -e

if [ -z ${PROD_DB_URI} ] || [ -z ${PROD_JWT_SECRET} ]; then
    exit -1
else
    echo ${PROD_DB_URI}
    echo ${PROD_JWT_SECRET}
	export NODE_CONFIG="{\"mongoURI\":\"${PROD_DB_URI}\", \"jwtSecret\":\"${PROD_JWT_SECRET}\"}"
fi