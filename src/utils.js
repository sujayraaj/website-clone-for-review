import pathOr from 'lodash/fp/pathOr';
import curry from 'lodash/fp/curry';

export const getLabels = curry((labelObj,path) => pathOr(path,path,labelObj)); 