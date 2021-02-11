export function splitSentenseIntoWord(sentense: string) {
    return sentense
        .toLowerCase()
        .split(' ')
        .filter((word) => word !== '')
        .map((word) => word.replace('!', ''))
}

export function summation(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
    return a * b;
}