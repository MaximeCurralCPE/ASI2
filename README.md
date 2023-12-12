# ASI2_atelier1
group project on Information Systems Architecture: Node/React

## Our team
- Maxime CURRAL
- Romain GALMIER
- Romain GAUD

## Link to architecture
[excalidraw](https://excalidraw.com/#room=274d475053e323c93b8d,owSvJtYYFefMiG_yu0wSpw)

## Link to reverse proxy 

[LINK](https://prod.e-campus.cpe.fr/mod/page/view.php?id=33598)

## Reverse Proxy

### Installing

1. Run Docker **AS ADMIN**
2. Run the command in the terminal:
```bash
docker run --name my-nginx-container -p 80:80 -v <YOURPATH>:/etc/nginx/nginx.conf:ro -d nginx
```

### Using the reverse proxy

|Server|Port|url|
|------------------|---|-|
|API|8083|/api|
|Front|5173|NONE|
|Reverse Proxy|80|N/A|

Ex: On veut écrire à l'API, on addresse la requete à 80/api => transforme la requete en enlevant api



