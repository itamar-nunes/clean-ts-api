import { SignUpController } from '../../../../../presentation/controllers/login/signup/signup-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeSignupValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '../../../usecases/account/db-authentication-factory'
import { makeAddAccount } from '../../../usecases/account/db-add-account-factory'
import { makeLogDecoratorController } from '../../decorators/log-decorator-controller-factory'

export const makeSignupController = (): Controller => {
  const controller = new SignUpController(makeAddAccount(), makeSignupValidation(), makeDbAuthentication())
  return makeLogDecoratorController(controller)
}
