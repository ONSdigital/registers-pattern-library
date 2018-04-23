/**
 * @const formSelectJson - Given some JSON including key value pairs (e.g. C: '2-4'),
 * transform the JSON into an array of JSON objects with the format:
 * { label: 'C [2-4]', value: 'C' }. This is to create the correct format for the
 * react-select component
 *
 * @param {Object} json
 *
 * @return {Object} - An object with the correct format for react-select
 */
export const formSelectJson = (json) => Object.keys(json).map(key => ({ label: `${key} [${json[key]}]`, value: key }));

