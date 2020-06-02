import { Controller } from '../../../../presentation/protocols'
import { LoadSurveysController } from '../../../../presentation/controllers/survey/load-surveys-controller'
import { makeLogDecoratorController } from '../decorators/log-decorator-controller-factory'
import { makeDbLoadSurveys } from '../../usecases/survey/db-load-surveys-factory'

export const makeLoadSurveysController = (): Controller => {
  const controller = new LoadSurveysController(makeDbLoadSurveys())
  return makeLogDecoratorController(controller)
}
