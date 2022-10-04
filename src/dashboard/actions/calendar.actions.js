export const DATE_CHANGED = 'CLENDAR/DATE_CHANGED';
export const SET_VISIBLE = 'CLENDAR/SET_VISIBLE';
export const SET_INVISIBLE = 'CLENDAR/SET_INVISIBLE';

export function setDate(date) {
  return {
    type: DATE_CHANGED,
    payload: {
      date,
    },
  };
}
export function setVisible() {
  return {
    type: SET_VISIBLE,
    payload: {
      isVisible: true,
    },
  };
}

export function setInvisible() {
  return {
    type: SET_INVISIBLE,
    payload: {
      isVisible: false,
    },
  };
}
