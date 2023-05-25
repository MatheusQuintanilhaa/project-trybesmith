import express from 'express';

import routers from './routers/product.router';

const app = express();

app.use(express.json());
app.use(routers);

export default app;
