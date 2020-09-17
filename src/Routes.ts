import * as express from 'express';
import * as httpProxy from 'express-http-proxy';
const Routes = express.Router();

export const API_URL = {
  CLIENTE_API_URL: 'http://localhost:3001',
  PEDIDO_API_URL: 'http://localhost:3002',
};

const clienteServiceProxy = httpProxy(API_URL.CLIENTE_API_URL);
const pedidoServiceProxy = httpProxy(API_URL.PEDIDO_API_URL);

Routes.get(
  '/',
  (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    response.send('im a api gateway');
  }
);
Routes.get('/cliente', (request, response, next) =>
  clienteServiceProxy(request, response, next)
);

export default Routes;
