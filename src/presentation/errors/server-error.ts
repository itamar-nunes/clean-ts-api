export class ServerError extends Error {
  constructor () {
    super('Internal server error')
    super.name = 'ServerError'
  }
}
