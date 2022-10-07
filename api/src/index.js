import 'dotenv/config'

import cors from 'cors'
import express from 'express'
import endpoints  from './endpoints.js'

const server = express();

server.use(cors());
server.use(express.json());
server.use(endpoints);

server.listen(process.env.PORT, () =>
                console.log(`PORTA online na porta ${process.env.PORT}`))