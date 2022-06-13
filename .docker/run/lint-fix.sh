#!/bin/bash

docker-compose exec php-fpm vendor/bin/php-cs-fixer fix
