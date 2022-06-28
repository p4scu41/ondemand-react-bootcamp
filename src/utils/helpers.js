function objectIsEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function ArrayIntersec(a, b) {
    return a.filter(x => b.includes(x));
}

function ArrayHasIntersec(a, b) {
    return ArrayIntersec(a, b).length > 0;
}

export { objectIsEmpty, ArrayIntersec, ArrayHasIntersec };
