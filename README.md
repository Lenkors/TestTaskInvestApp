# Dependencies
- php 8.0
- node ver 14.16
- MySQL 8.0
- nginx:alpine

- Vue 3
- Laravel 9.11


# Setup
### configure the `.env` file

### first run install composer packages
``` composer install ```

### To run a project via the docker, run the command
``` docker-compose up -d ```

### Run laravel migration *(if using a docker, you must change the `DB_HOST` variable to the local address before starting the migration. to work `database` in the application, set `DB_HOST` to the default container name `mysql`*
``` php artisan migrate ```

### next, install front-end dependencies and start front
``` npm run i && npm run {dev\prod\watch}```


