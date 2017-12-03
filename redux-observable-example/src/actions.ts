export type Action = {
    type: 'FETCH_STATE'
} | {
    type: 'LOAD_STATE_FULFILLED',
    data: any
}| {
    type: 'LOAD_STATE_REJECTED',
    error: any
} | {
    type: 'SET_VALUE',
    key: string,
    value: number
} | {
    type: 'INCREMENT_VALUE',
    key: string
} | {
    type: 'INCREMENT_VALUE_FULFILLED',
    key: string
} | {
    type: 'INCREMENT_VALUE_REJECTED',
    error: any
}  | {
    type: 'DECREMENT_VALUE',
    key: string
} | {
    type: 'DECREMENT_VALUE_FULFILLED',
    key: string
} | {
    type: 'DECREMENT_VALUE_REJECTED',
    error: any
};

export const FETCH_STATE = 'FETCH_STATE';
export const fetchState = () => ({ type: FETCH_STATE });

export const LOAD_STATE_FULFILLED = 'LOAD_STATE_FULFILLED';
export const LOAD_STATE_REJECTED = 'LOAD_STATE_REJECTED';
export const loadStateRejected =  (error: any) => ({ type: LOAD_STATE_REJECTED, error });

export const SET_VALUE = 'SET_VALUE';
export const setValue = (key: string, value: number) => ({ type: SET_VALUE, key, value });

export const INCREMENT_VALUE = 'INCREMENT_VALUE';
export const INCREMENT_VALUE_FULFILLED = 'INCREMENT_VALUE_FULFILLED';
export const INCREMENT_VALUE_REJECTED = 'INCREMENT_VALUE_REJECTED';
export const increment = (key: string) => ({ type: INCREMENT_VALUE, key });
export const incrementFulfilled = (key: string) => ({ type: INCREMENT_VALUE_FULFILLED, key });
export const incrementRejected = (error: any) => ({ type: INCREMENT_VALUE_REJECTED, error });

export const DECREMENT_VALUE = 'DECREMENT_VALUE';
export const DECREMENT_VALUE_FULFILLED = 'DECREMENT_VALUE_FULFILLED';
export const DECREMENT_VALUE_REJECTED = 'DECREMENT_VALUE_REJECTED';
export const decrement = (key: string) => ({ type: DECREMENT_VALUE, key });
export const decrementFulfilled = (key: string) => ({ type: DECREMENT_VALUE_FULFILLED, key });
export const decrementRejected = (error: any) => ({ type: DECREMENT_VALUE_REJECTED, error });