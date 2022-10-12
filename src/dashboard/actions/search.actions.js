export const SEARCH_TEXT_CHANGED = 'SEARCH/SEARCH_TEXT_CHANGED';

export function setSearchString(searchText) {
  return {
    type: SEARCH_TEXT_CHANGED,
    payload: { searchText },
  };
}
