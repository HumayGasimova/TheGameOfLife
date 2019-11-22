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
