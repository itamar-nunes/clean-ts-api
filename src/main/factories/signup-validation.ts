import { ValidationComposite } from '../../presentation/helpers/validator/validator-composite'
import { Validation } from '../../presentation/helpers/validator/validations'
import { RequiredFieldValidation } from '../../presentation/helpers/validator/required-field-validation'

export const makeSignupValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }

  return new ValidationComposite(validations)
}
