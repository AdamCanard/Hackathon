import express from 'express';
import path from 'path';
import router from './routes';
import cors from 'cors';

const PORT = 3000;
const VERSION = '0.0.0';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Log server startup
app.listen(PORT, () => console.log(`Started API v${VERSION} on port ${PORT}`));
