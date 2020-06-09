import { LoginController } from '@/presentation/controllers/login/login/login-controller'
import { Controller } from '@/presentation/protocols'
import { makeDbAuthentication } from '@/main/factories/usecases/authentication/db-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'
import { makeLogDecoratorController } from '@/main/factories/controllers/decorators/log-decorator-controller-factory'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogDecoratorController(controller)
}
