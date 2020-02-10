import { handleActions } from 'redux-actions';

import { appReady } from './actions';

const DEFAULT_STATE: IAppState = {
    isReady: false,
};

export interface IAppState {
    isReady: boolean;
}

export default handleActions<IAppState, any>(
    {
        [appReady.toString()]: () => ({ ...DEFAULT_STATE, isReady: true }),
    },
    DEFAULT_STATE,
);
