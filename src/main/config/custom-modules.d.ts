// Inserindo uma propriedade "accountId" no request do Express, automaticamente.
// Para poder ser usado, por exemplo de uso em: "express-middleware-adapter.ts"
declare namespace Express {
  interface Request {
    accountId?: string
  }
}
