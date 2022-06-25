import express from 'express'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import db from './config/dbConnect.js'
import routes from './routes/index.js'

db.on('error', console.log.bind(console, 'Erro de conexao'))
db.once('open', () => {
  console.log('Conexao com o banco realizada com sucesso')
})

const app = express()
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use('/', express.static(resolve(__dirname, '..', 'public')))

routes(app)
export default app
