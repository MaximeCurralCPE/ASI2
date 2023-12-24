# ASI2_atelier1
group project on Information Systems Architecture: Node/React

## Our team
- Maxime CURRAL
- Romain GALMIER
- Romain GAUD

## Link to architecture
[excalidraw](https://excalidraw.com/#room=274d475053e323c93b8d,owSvJtYYFefMiG_yu0wSpw)


## Elements réalisés:

### Atelier 1

#### Front End React

- Galmier : Store Card, interface magasin/inventaire
- Gaud : Login/Création utilisateur, communication via proxy

#### Backend Mono Bus

- Curral : Emission d'un message via bus de communication, travail sur serveur Springboot

### Atelier 2

#### Front

- Gaud : communication via socket avec le chat
- Curral : Design du chat, communication store/inventaire avec le backend spring
- Galmier : création d'une room de jeu

#### Back

- Gaud : Websocket chat sur nodeJS
- Galmier : Logique de jeu dans nodeJS Game

## Elements complétés

### Active MQ

- Emission de messages au serveur activeMQ

### Front end React:

- Login & création d'utilisateurs
- Routeur
- Store REDUX pour les cartes et le user
- Switch entre le market et l'inventaire de l'utilisateur
- Page d'arène avec chat connecté au backend Node
- Début de connection à l'autre

### Backend Node

#### Chat

- Plusieurs utilisateurs peuvent se connecter
- Redirection des messages sous formes de JSON à tous les utilisateur connectés

#### Game

- Création de salle de jeu OK : deux utilisateurs peuvent se connecter séquentiellement pour jouer
- Logique du jeu implémenté dans une architecture minimaliste

## A faire:

### ActiveMQ

- Traitement asynchrone de l'information
- Listening sur le topic

### Front end React:

- Corriger certains bug: actualisation de l'inventaire, store en direct
- Ameliorer le design,
- Mettre en place la logique de jeu visuellement via les communciation avec le back Node

### Backend Node

#### Chat

- Pouvoir parler specifiquement à un utilisateur
- Corriger certains bug de dedoublement d'envois de messages

#### Game

- Lien avec le front peu fait
- corriger les bugs qui empechent la communication optimale

## Link to reverse proxy 

[LINK](https://prod.e-campus.cpe.fr/mod/page/view.php?id=33598)

## Before using

NOTE: User the professor's backend to make the application work. We were not able to completely finish our springboot back end with the ESB bus system.
Launch on 8083.

## Reverse Proxy

### Installing

1. Run Docker **AS ADMIN**
2. Copy path to nginx.conf file
3. Run the command in the terminal:
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

## Issues with vite server

You may try:

```bash
npm install react
npm install --save-dev @vitejs/plugin-react
npm install react-redux
```

Check on windows if a port is available:
```bash
netstat -ano | findstr :<YourPortNumber>
```

