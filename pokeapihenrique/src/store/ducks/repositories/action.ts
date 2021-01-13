import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';
//função de disparo
export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSucces = () => (data: Repository[]) => action(RepositoriesTypes,data);

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

