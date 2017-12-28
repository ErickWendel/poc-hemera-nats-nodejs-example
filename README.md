## Hemera POC

Testing Hemera with Nats to Communication with Microservices, and HapiJS Routers

### Runnig

`docker-compose up`

### Load Testing

`brew install siege` <br />
`siege -b -t30S -c255 -d10 http://localhost:3003`
