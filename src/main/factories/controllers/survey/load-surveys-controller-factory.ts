import { makeLogDecoratorController } from '@/main/factories/controllers/decorators/log-decorator-controller-factory'
import { makeDbLoadSurveys } from '@/main/factories/usecases/survey/db-load-surveys-factory'
import { LoadSurveysController } from '@/presentation/controllers/survey/load-surveys-controller'
import { Controller } from '@/presentation/protocols'

export const makeLoadSurveysController = (): Controller => {
  const controller = new LoadSurveysController(makeDbLoadSurveys())
  return makeLogDecoratorController(controller)
}
