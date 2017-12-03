import { Group } from './models';

export interface AppState {
    values: Group[];
}

export const initialState: AppState = {
    values: []
};