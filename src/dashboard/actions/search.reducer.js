import { SEARCH_TEXT_CHANGED } from './search.actions';
const defaultState = { searchText: '' };
export default function searchReducer(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_TEXT_CHANGED:
      return { ...state, searchText: action.payload.searchText };

    default:
      return state;
  }
}
