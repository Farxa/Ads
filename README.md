## Setup and scripts

- Node.js >= 20

```
cd 3_marketplace_app/client
npm install
npm start
```

To generate fake data about ads and users. A fake server exposes the data as REST API. You can use it by

```ssh
  cd client
  npm run start:fake-server
```

You can start our React example application by:

```ssh
  cd client
  npm run start
```

## comments:

### For task #3:

- finish implementing mobile first design of the application
- write more tests for all components
- inhance the UX by implementing loading state, lazy loading for images, maybe pagination, consider adding feedback for user actions
- implement a searching and filtering functionality
- refactor and create resusable componants like a card componant for each ad for example
