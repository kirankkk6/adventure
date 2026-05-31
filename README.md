# adventure
bus-booking-app
# Bus Booking Application

A simple static Bus Booking Demo Application built using:

- HTML
- CSS
- JavaScript
- Nginx
- Docker

## Build Docker Image

```bash
docker build -t busimg .
```

## Run Container

```bash
docker run -d -p 1234:80 --name cont1 busimg
```

## Access Application

http://localhost:1234
