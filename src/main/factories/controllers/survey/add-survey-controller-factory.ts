import { Controller } from '../../../../presentation/protocols'
import { AddSurveyController } from '../../../../presentation/controllers/survey/add-survey-controller'
import { makeLogDecoratorController } from '../decorators/log-decorator-controller-factory'
import { makeAddSurveyValidation } from './add-survey-validation'
import { makeDbAddSurvey } from '../../usecases/survey/db-add-survey-factory'

export const makeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogDecoratorController(controller)
}
