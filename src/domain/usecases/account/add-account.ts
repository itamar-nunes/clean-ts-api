import { AccountModel } from '@/domain/models/account'

export type AddAccountDTO = Omit<AccountModel, 'id'>

export interface AddAccount {
  add (account: AddAccountDTO): Promise<AccountModel>
}

// Modo tradicional de criar uma "interface" usando o "type" e definindo todos os campos, exceto os que você não quer.
// Ver tambem acima, o modo usando o utilitátio do TS chamado "Omit<>"
// export type AddAccountDTO = {
//   name: string
//   email: string
//   password: string
// }
