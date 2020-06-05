import { Controller, HttpRequest, HttpResponse, LoadSurveys } from './survey-controller-protocols'
import { ok, serverError, noContent } from '@/presentation/helpers/http/http-helper'

export class LoadSurveysController implements Controller {
  constructor (private readonly loadSurveys: LoadSurveys) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurveys.load()
      return surveys.length ? ok(surveys) : noContent()
    } catch (error) {
      serverError(error)
    }
  }
}
