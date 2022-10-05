import { DATE_CHANGED, SET_INVISIBLE, SET_VISIBLE } from './calendar.actions';

const defaultState = { date: new Date(), isVisible: false };

export default function calendarReducer(state = defaultState, action) {
  switch (action.type) {
    case DATE_CHANGED:
      return { ...state, date: action.payload.date, isVisible: false };
    case SET_VISIBLE:
      return { ...state, isVisible: true };
    case SET_INVISIBLE:
      return { ...state, isVisible: false };

    default:
      return state;
  }
}
