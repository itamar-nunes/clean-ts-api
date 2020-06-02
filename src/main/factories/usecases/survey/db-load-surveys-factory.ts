import { LoadSurveys } from '../../../../domain/usecases/load-surveys'
import { SurveyMongoRepository } from '../../../../infra/db/mongodb/survey/survey-mongo-repository'
import { DbLoadSurveys } from '../../../../data/usecases/survey/db-load-surveys'

export const makeDbLoadSurveys = (): LoadSurveys => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(surveyMongoRepository)
}
