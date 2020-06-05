import { makeAddSurveyValidation } from './add-survey-validation'
import { makeDbAddSurvey } from '@/main/factories/usecases/survey/db-add-survey-factory'
import { makeLogDecoratorController } from '@/main/factories/controllers/decorators/log-decorator-controller-factory'
import { AddSurveyController } from '@/presentation/controllers/survey/add-survey-controller'
import { Controller } from '@/presentation/protocols'

export const makeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogDecoratorController(controller)
}
