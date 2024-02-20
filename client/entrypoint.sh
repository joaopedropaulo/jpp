#!/bin/sh
set -e

envsubst '$JPP_SRV_BASE_URL' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"
