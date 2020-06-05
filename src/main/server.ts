import 'module-alias/register'
// Nota: A linha a cima, deve ser a primeira linha desde arquivo
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    // Fazendo import do app aqui, para garantir que ele não vá requisitar nada antes de conectar-se ao banco de dados
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server reunning at http://localhost:${env.port}`))
  })
  .catch(console.error)
