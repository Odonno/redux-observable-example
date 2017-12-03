import { Action } from 'redux';
import { Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { AppState } from './state';
import {
    FETCH_STATE,
    setValue,
    INCREMENT_VALUE,
    incrementFulfilled,
    DECREMENT_VALUE,
    decrementFulfilled,
    incrementRejected,
    decrementRejected,
    loadStateRejected
} from './actions';
import { getValues, postIncrement, postDecrement } from './api';
import { Group } from './models';

const loadStateEpic: Epic<Action, AppState> = (action$, store) => {
    return action$.ofType(FETCH_STATE)
        .mergeMap(action => {
            return getValues()
                .map(response => response.response)
                .map<Group[], Action[]>(groups => {
                    return groups.map(g => setValue(g.key, g.value));
                })
                .catch(error => Observable.of([loadStateRejected(error)]));
        })
        .flatMap(actions => actions);
};

const incrementEpic: Epic<Action, AppState> = (action$, store) => {
    return action$.ofType(INCREMENT_VALUE)
        .mergeMap((action: any) => {
            return postIncrement(action.key)
                .map(response => response.response)
                .map(_ => incrementFulfilled(action.key))
                .catch(error => Observable.of(incrementRejected(error)));
        });
};

const decrementEpic: Epic<Action, AppState> = (action$, store) => {
    return action$.ofType(DECREMENT_VALUE)
        .mergeMap((action: any) => {
            return postDecrement(action.key)
                .map(response => response.response)
                .map(_ => decrementFulfilled(action.key))
                .catch(error => Observable.of(decrementRejected(error)));
        });
};

export const epics = [
    loadStateEpic,
    incrementEpic,
    decrementEpic
];