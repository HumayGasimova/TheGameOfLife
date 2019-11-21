import { createSelector } from 'reselect';

const getCells = (state) => state.theGameOfLife.cells;

export const getCellsState = createSelector(
    [getCells],
    (x) => x
);


