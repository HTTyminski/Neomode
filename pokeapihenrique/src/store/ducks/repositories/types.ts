// Actions types
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCES = '@repositories/LOAD_SUCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAIURE'
}
export interface Repository {
  id:number
  name:string
}
export interface RepositoriesState {
  readonly date: Repository[]
  readonly loading: boolean
  readonly error: boolean
}