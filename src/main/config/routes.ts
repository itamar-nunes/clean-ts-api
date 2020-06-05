import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  readdirSync(`${__dirname}/../routes`).map(async file => {
    if (!file.includes('.test.') && !file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}

// "dependencies": {
//   "fast-glob": "^3.2.2"
// }

// import { Express, Router } from 'express'
// import fg from 'fast-glob'

// export default (app: Express): void => {
//   const router = Router()
//   app.use('/api', router)

//   fg.sync('**/src/main/routes/**routes.ts').map(async file => {
//     // (await import(`../../../${file}`)).default(router)

//     const route = (await import(`../../../${file}`)).default
//     route(router)
//   })
// }
