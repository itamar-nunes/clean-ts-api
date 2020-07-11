import { AddSurvey, AddSurveyDTO, AddSurveyRepository } from './db-survey-protocols'

export class DbAddSurvey implements AddSurvey {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) {}

  async add (surveyData: AddSurveyDTO): Promise<void> {
    await this.addSurveyRepository.add(surveyData)
  }
}
