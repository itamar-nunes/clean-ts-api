import { Validation } from '../../protocols/validations'
import { InvalidParamError } from '../../errors'

export class CompareFieldsValidation implements Validation {
  private readonly fieldName: string
  private readonly fielToCompareName: string

  constructor (fieldName: string, fieldToCompareName: string) {
    this.fieldName = fieldName
    this.fielToCompareName = fieldToCompareName
  }

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fielToCompareName]) {
      return new InvalidParamError(this.fielToCompareName)
    }
  }
}
