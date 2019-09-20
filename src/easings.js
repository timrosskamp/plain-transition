export function easeIn(t){
    return t * t;
}

export function easeOut(t){
    return t * ( 2 - t );
}

export function easeInOut(t){
    return -2 * ( t * t * t ) + 3 * ( t * t );
}