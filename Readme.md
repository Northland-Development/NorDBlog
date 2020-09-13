# NorDBlog

This is the project that are making a blog with React, Bootstrap, Express, MySQL.

## Setting up development

Requirements:  

1. Need to have following things installed:
    - Nodejs
    - docker/docker-compose
2. Once installed should be able to run the following command to have the client, api and db started up.
    ```shell
    npm run installAll
    npm run start
    ```

links:
- [docker-compose.yml](https://docs.docker.com/compose/compose-file/)
- [docker install](https://docs.docker.com/get-docker/)

## Client

relevant docs to be here about the client.

## API

relevant docs to be here about the api.

## Database

Using a MySQL database, we descided to go in the direction of having the database in a container for development to avoid having users install and deal with configuring the database. [Read about the container](https://hub.docker.com/_/mysql/). The entry point for this container is to run the command: `docker-compose up`. 
