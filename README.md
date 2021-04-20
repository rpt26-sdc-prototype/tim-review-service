# FEC - Review Service for Steam

> This review service repo is a part of a larger service oriented architecture.  Several services own their own data and can only be accessed by the proxy server.  Users connections to individual services are routed through the proxy server.

>This particular service is the review service and holds all data related to user reviews.  A relational database is used to hold a reviews table and a users table.  A new setup will require seeding a database wtih mock data.  A schema.sql file is provided along with a db filling script that can be ran with node.

>The react code will require webpack bundling for local development and Grunt for automatic depoyment to an AWS S3 bucket

>Docker is used for deoployment of the Express App and MySQL db

## Table of Contents

1. [Technology](#Technology)
1. [Architecture](#Architecture)
1. [Related Projects](#RelatedProjects)
1. [Requirements](#requirements)
1. [Installation](#Installation)
1. [Development](#development)
1. [Deployment](#deployment)
1. [ReviewApp](#ReviewApp)
1. [Testing](#Testing)

## Technology

![Untitled presentation (3)](https://user-images.githubusercontent.com/71040019/115333143-ff237680-a14d-11eb-9d00-12b2e1963bdf.jpg)

## Architecture

![FEC (4)](https://user-images.githubusercontent.com/71040019/115333049-d56a4f80-a14d-11eb-90f6-c4c63b9dfd1f.png)

## Related Projects

  Proxy Server:
  - https://github.com/rpt26-fec-pathfinder/tim-proxy

  Other Services:
  - https://github.com/rpt26-fec-pathfinder/anthony-photo-gallery-service
  - https://github.com/rpt26-fec-pathfinder/james-metadata-service
  - https://github.com/rpt26-fec-pathfinder/calvin-more-like-this-service


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Docker
- MySQL

## Installation

> npm Install and database setup / seeding.  This will need to be done in all new environments.

```
1. run "npm install"
2. run "mysql -u root < db/schema.sql" or docker exec into the mysql container and paste in the schema.sql file
3. run "node db/dbFiller.js"
```

If using docker make sure you are running the db filling script from the correct virtual environment

## Development

In seperate dos windows:

```
$ npm run start-dev
$ npm run react-dev
```

## Deployment

### Docker Deployment

From within the root directory:

```
$ docker-compose up
```
### Grunt / AWS S3 Deployment
```
$ grunt deploy
```

## ReviewApp

The review app uses react and styled components.

## Testing

Travis CI is used for continuous development.