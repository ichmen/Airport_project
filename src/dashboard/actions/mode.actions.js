export const MODE_CHANGED = 'MODE/MODE_CHANGED';

export function modeChanged(mode) {
  debugger;
  return {
    type: MODE_CHANGED,
    payload: { mode },
  };
}
