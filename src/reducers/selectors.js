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

const getSpeedRange = (state) => state.theGameOfLife.speedRange;

export const getSpeedRangeState = createSelector(
    [getSpeedRange],
    (x) => x
);

const getDelay = (state) => state.theGameOfLife.delay;

export const getDelayState = createSelector(
    [getDelay],
    (x) => x
);

const getDropdownList = (state) => state.theGameOfLife.dropdownList;

export const getDropdownListState = createSelector(
    [getDropdownList],
    (x) => x
);
