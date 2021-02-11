import { summation, multiply, splitSentenseIntoWord } from './01'

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 150;
    b = 224;
    c = 350;

})
test('Тестируем функцию суммирования', () => {

    // data beforeEach

    // action
    const result1 = summation(a, b)
    const result2 = summation(a, c)
    const result3 = summation(c, b)
    a = 100; // не повлияет на следующий тест

    // expect result
    expect(result1).toBe(374)
    expect(result2).toBe(500)
    expect(result3).toBe(574)
})

test('Тестируем функцию умножения', () => {
    // data beforeEach

    // action
    let result1 = multiply(a, b)
    let result2 = multiply(a, c)
    let result3 = multiply(c, b)

    // expect result
    expect(result1).toBe(33600)
    expect(result2).toBe(52500)
    expect(result3).toBe(78400)
})

test('Проверка работы сплита предложения', () => {
    const sentense1 = 'Привет! меня зовут Егорка';
    const sentense2 = 'И я  сижу на пригорке';

    let split1 = splitSentenseIntoWord(sentense1)
    let split2 = splitSentenseIntoWord(sentense2)

    expect(split1[0]).toBe('привет')
    expect(split2[3]).toBe('на')
    expect(split2.length).toBe(5)
})