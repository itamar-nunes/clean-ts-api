import { makeSignupValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '@/main/factories/usecases/account/db-authentication-factory'
import { makeAddAccount } from '@/main/factories/usecases/account/db-add-account-factory'
import { makeLogDecoratorController } from '@/main/factories/controllers/decorators/log-decorator-controller-factory'
import { Controller } from '@/presentation/protocols'
import { SignUpController } from '@/presentation/controllers/login/signup/signup-controller'

export const makeSignupController = (): Controller => {
  const controller = new SignUpController(makeAddAccount(), makeSignupValidation(), makeDbAuthentication())
  return makeLogDecoratorController(controller)
}
