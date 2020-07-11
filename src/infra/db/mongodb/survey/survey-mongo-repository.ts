import { ObjectId } from 'mongodb'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyDTO } from '@/domain/usecases/survey/add-survey'
import { AddSurveyRepository } from '@/data/protocols/db/survey/add-survey-repository'
import { LoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys-repository'
import { LoadSurveyByIdRepository } from '@/data/usecases/survey/db-survey-protocols'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository, LoadSurveyByIdRepository {
  async add (surveyData: AddSurveyDTO): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const surveys = await surveyCollection.find().toArray()
    return MongoHelper.mapMongoCollectionToObject(surveys)
  }

  async loadById (id: string): Promise<SurveyModel> {
    const surveyCollection = await MongoHelper.getCollection('surveys')

    // Não é necessário fazer o "cast" do tipo do retrono do Mongo, porque...
    // ... porque o metodo já diz que será retornado do tipo Promise<SurveyModel>
    // const survey: SurveyModel = await surveyCollection.findOne({
    //   _id: id
    // })

    const survey = await surveyCollection.findOne({
      _id: new ObjectId(id)
    })
    return survey && MongoHelper.mapMongoToObject(survey)
  }
}
