import { HttpRequest, HttpResponse, Controller, AddAccount, Validation } from './signup-controller-protocols'
import { badRequest, serverError, ok } from '../../helpers/http/http-helper'

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      // Moved to new Validations class

      // const requeridFields = ['name', 'email', 'password', 'passwordConfirmation']
      // for (const field of requeridFields) {
      //   if (!httpRequest.body[field]) {
      //     return badRequest(new MissingParamError(field))
      //   }
      // }

      // const { name, email, password, passwordConfirmation } = httpRequest.body

      // if (password !== passwordConfirmation) {
      //   return badRequest(new InvalidParamError('email'))
      // }

      // const isValid = this.emailValidator.isValid(email)
      // if (!isValid) {
      //   return badRequest(new InvalidParamError('email'))
      // }

      const { name, email, password } = httpRequest.body

      const account = await this.addAccount.add({
        name,
        email,
        password
      })

      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
}
