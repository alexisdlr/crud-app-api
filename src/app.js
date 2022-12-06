import express from 'express'
import indexRoutes from './routes/index.routes.js'
import apiRoutes from './routes/api.routes.js'
const app = express();

app.use(express.json())

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use('/', indexRoutes)
app.use('/api/crud', apiRoutes)


export default app