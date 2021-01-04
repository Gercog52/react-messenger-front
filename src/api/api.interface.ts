export interface IquickRegistrationDataReq {
  firstName: string,
  lastName: string
}
export interface IregistrationDataReq {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}
export interface IregistrationDataRes {
  id: number
  firstName: string,
  lastName: string,
  email: string,
  avatarId: string | null,
  access_token: string
}