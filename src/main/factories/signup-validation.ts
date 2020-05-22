import { ValidationComposite } from '../../presentation/helpers/validator/validator-composite'
import { Validation } from '../../presentation/helpers/validator/validations'
import { RequiredFieldValidation } from '../../presentation/helpers/validator/required-field-validation'
import { CompareFieldsValidation } from '../../presentation/helpers/validator/compare-fields-validation'

export const makeSignupValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }

  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))

  return new ValidationComposite(validations)
}
