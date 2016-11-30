Prerender
=========

## Running locally
### Vagrant environment
Install Vagrant and run

```
vagrant up
```

### Setup
Create a `.env` file and add the following

```
PRERENDER_NUM_WORKERS=1
PRERENDER_NUM_ITERATIONS=40
REDIS_HOST=
REDIS_PORT=
```
### Start the service

```
vagrant ssh
nf start # start the prerender service
```

## Running on production
This prerender need redis service to work. Make sure to set the redis host and port in your environement variables.
If you want to disable redis, remove this line in `server.js`

```
...
server.use(prerender.redisHtmlCache());
...
```
