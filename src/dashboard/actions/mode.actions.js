export const MODE_CHANGED='MODE/MODE_CHANGED';

export function modeChanged(mode){
    return {
        type:MODE_CHANGED,
        payload:{mode}
    }
}