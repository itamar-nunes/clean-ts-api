import { LoadSurveyById } from '@/data/usecases/survey/db-survey-protocols'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/survey-mongo-repository'
import { DbLoadSurveyById } from '@/data/usecases/survey/db-load-survey-by-id'

export const makeDbLoadSurveyById = (): LoadSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyById(surveyMongoRepository)
}
