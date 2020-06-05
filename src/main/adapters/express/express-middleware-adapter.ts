import { Request, Response, NextFunction } from 'express'
import { Middleware, HttpRequest } from '@/presentation/protocols'

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.headers
    }

    const httpResponse = await middleware.handle(httpRequest)
    if (httpResponse.statusCode === 200) {
      // Exemplo de uso do "custom-namespaces.d.ts". Verifica no arquivo para mais detalhes
      // const accountId = req.accountId

      // Colocando o body da resposta (httpResponse.body), no body da requisição (req.body) do Express
      Object.assign(req, httpResponse.body)
      next()
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
