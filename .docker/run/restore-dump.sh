#!/usr/bin/env bash

docker-compose exec --user mysql root sh -c \
        'cd ~/data && mysql_restore -d kelric -O -c -Fc ./db.dump'
