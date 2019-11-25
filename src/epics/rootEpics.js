import { combineEpics } from 'redux-observable';
import * as Epic from './index'

export const rootEpic = combineEpics(
    Epic.startZoomingEpic,
    Epic.gameInitializationEpic,
    Epic.onNextHandlerEpic
);
