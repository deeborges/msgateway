import * as express from 'express';
import * as bodyParser from 'body-parser';
import Routes from '../Routes';

const app = express();

app.use(Routes);
app.use(bodyParser.json());

export default app;