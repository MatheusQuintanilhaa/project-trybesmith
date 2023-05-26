import express from 'express';

import productRouters from './routers/product.router';
import orderRouters from './routers/order.router';

const app = express();

app.use(express.json());
app.use(productRouters);
app.use(orderRouters);

export default app;

// arrumando atualização