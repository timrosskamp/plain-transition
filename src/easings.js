export function easeIn(t){
    return -Math.cos(t * Math.PI * 0.5) + 1;
}

export function easeOut(t){
    return Math.sin(t * Math.PI * 0.5);
}

export function easeInOut(t){
    return -Math.cos(t * Math.PI) * 0.5 + 0.5;
}