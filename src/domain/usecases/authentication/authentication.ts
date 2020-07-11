export type AuthenticationDTO = {
  email: string
  password: string
}

export interface Authentication {
  auth (authentication: AuthenticationDTO): Promise<string>
}
