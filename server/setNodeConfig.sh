#!/bin/sh

if [ -z $1 ] && [ -z $2 ]; then
    exit 0
else
	export NODE_CONFIG="{\"mongoURI\":\"$1\", \"jwtSecret\":\"$2\"}"
fi