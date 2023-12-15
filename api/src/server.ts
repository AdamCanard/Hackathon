import express from 'express';
import router from './routes';

const PORT = 3000;
const VERSION = '0.0.0';

const app = express();

app.use(router);

// Log server startup
app.listen(PORT, () => console.log(`Started API v${VERSION} on port ${PORT}`));
