import { LoginController } from '../../../../../presentation/controllers/login/login/login-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeDbAuthentication } from '../../../usecases/account/db-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'
import { makeLogDecoratorController } from '../../decorators/log-decorator-controller-factory'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogDecoratorController(controller)
}
