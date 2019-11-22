import { createSelector } from 'reselect';

const getCells = (state) => state.theGameOfLife.cells;

export const getCellsState = createSelector(
    [getCells],
    (x) => x
);

const getZoom = (state) => state.theGameOfLife.zoom;

export const getZoomState = createSelector(
    [getZoom],
    (x) => x
);

const getScale = (state) => state.theGameOfLife.scale;

export const getScaleState = createSelector(
    [getScale],
    (x) => x
);

const getTranslation = (state) => state.theGameOfLife.translation;

export const getTranslationState = createSelector(
    [getTranslation],
    (x) => x
);
