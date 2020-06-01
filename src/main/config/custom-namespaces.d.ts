// Inserindo uma propriedade "accountId" no request do Express, automaticamente.
// Para poder ser usando quando for necessario
// Exemplo de uso em: "express-middleware-adapter.ts"
declare namespace Express {
  interface Request {
    accountId?: string
  }
}
