import { AppState } from './state';
import {
    Action,
    SET_VALUE,
    INCREMENT_VALUE_FULFILLED,
    DECREMENT_VALUE_FULFILLED,
    INCREMENT_VALUE_REJECTED,
    DECREMENT_VALUE_REJECTED,
    LOAD_STATE_REJECTED
} from './actions';

export const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case LOAD_STATE_REJECTED:
            console.log(action.error);
            return state;

        case SET_VALUE:
            if (state.values.filter(g => g.key === action.key).length <= 0) {
                return {
                    ...state,
                    values: state.values.concat({ key: action.key, value: action.value })
                };
            }

            return {
                ...state,
                values: state.values.map(group => {
                    if (group.key === action.key) {
                        return {
                            key: group.key,
                            value: action.value
                        };
                    }
                    return group;
                })
            };

        case INCREMENT_VALUE_FULFILLED:
            return {
                ...state,
                values: state.values.map(group => {
                    if (group.key === action.key) {
                        return {
                            key: group.key,
                            value: group.value + 1
                        };
                    }
                    return group;
                })
            };

        case INCREMENT_VALUE_REJECTED:
            console.log(action.error);
            return state;

        case DECREMENT_VALUE_FULFILLED:
            return {
                ...state,
                values: state.values.map(group => {
                    if (group.key === action.key) {
                        return {
                            key: group.key,
                            value: group.value - 1
                        };
                    }
                    return group;
                })
            };

        case DECREMENT_VALUE_REJECTED:
            console.log(action.error);
            return state;

        default:
            return state;
    }
};