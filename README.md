# FEC - Review Service for Steam

> This review service repo is a part of a larger service oriented architecture.  Several services own their own data and feed information to a proxy server.  Users only connect with the proxy server but receive data from all services.

## Related Projects

  - https://github.com/rpt26-fec-pathfinder/tim-proxy
  - https://github.com/rpt26-fec-pathfinder/anthony-photo-gallery-service
  - https://github.com/rpt26-fec-pathfinder/james-metadata-service
  - https://github.com/rpt26-fec-pathfinder/calvin-more-like-this-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Deployment](#deployment)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Docker

## Development

### Installing Dependencies

The database filling script will need to be edited if your mysql login is not -u root w/ password root

From within the root directory:

```sh
1. run "npm install"
2. run "mysql -u root < db/schema.sql" or docker exec into the mysql container and paste in the schema.sql file
3. run "node db/dbFiller.js"
```

## Deployment

### This repo has been configured for a docker depoloyment

From within the root directory:

```sh
1. run "docker-compose up
```