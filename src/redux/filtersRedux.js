/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_VALUE = createActionName('CHANGE_VALUE');
export const CHANGE_CHECK = createActionName('CHANGE_CHECK');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDurationValue = payload => ({ payload, type :CHANGE_VALUE});
export const changeBoxCheck = payload => ({ payload, type: CHANGE_CHECK});
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_VALUE:
      return{
        ...statePart,
        duration: action.payload,
      };
    case CHANGE_CHECK:
      return{
        ...statePart,
        tags: action.payload,
      };
    default:
      return statePart;
  }
}
