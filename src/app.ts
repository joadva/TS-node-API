import express from 'express';
import cors from "cors";
import morgan from "morgan";



// sawger
import swaggerUI, { serve } from 'swagger-ui-express'
import swaggerJsDpc from 'swagger-jsdoc'
import {options} from './swaggerOptions'

//router
import taskRoutes from './routes/tasks.routes'

const app= express();
app.set('port',process.env.PORT || 3000);

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

const specs = swaggerJsDpc(options)

app.use(taskRoutes)
app.use('/docs',swaggerUI.serve,swaggerUI.setup(specs));

export default app;