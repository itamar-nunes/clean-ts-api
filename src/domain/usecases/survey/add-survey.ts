import { SurveyModel } from '@/domain/models/survey'

export type AddSurveyModel = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add (data: AddSurveyModel): Promise<void>
}

// Modo tradicional de criar uma "interface" usando o "type" e definindo todos os campos, exceto os que você não quer.
// Ver tambem acima, o modo usando o utilitátio do TS chamado "Omit<>"
// export type AddSurveyModel = {
//   question: string
//   answers: SurveyAnswerModel[]
//   date: Date
// }
