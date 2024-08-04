# Briar
Briar is the back-end service for updating Sivir.GG and processing League of Legends updates from available API. It collects all of services into one clean API.

Uses Nitro.JS + Pocketbase

### Development
You will need a Pocketbase instance for this app https://pocketbase.io/
The schema that this app uses you can find under `pb_schema.json`
(We will provide a Docker image in the future to not let you bother with this)

```bash
git clone "https://github.com/santoryo/briar"
cd briar

modify .env.example into .env

npm i
npm run dev

```
### Disclaimer
Briar isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.

