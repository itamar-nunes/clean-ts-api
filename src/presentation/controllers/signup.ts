export class SignUpController {
  handle(httpRequest: any): any {
    httpRequest = 'a'
    return {
      statusCode: 400,
      x: httpRequest
    }
  }
}