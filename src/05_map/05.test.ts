import { PeopleType } from './05'

let peoples: Array<PeopleType> = [];

beforeEach(() => {
    peoples = [
        { name: 'Ivan Ivanov', age: 35, isMarried: true },
        { name: 'Sergey Sergeev', age: 25, isMarried: false },
        { name: 'Egor Egorov', age: 18, isMarried: false },
    ]
})

test('Получить массив приветствий', () => {
    let messages = peoples.map((person) => {
        return `Hello, ${person.name.split(' ')[0]}, you have great second name ${person.name.split(' ')[1]} and we glad to see you in incubator`
    })

    expect(messages.length).toBe(3)
    expect(messages[2]).toEqual(`Hello, Egor, you have great second name Egorov and we glad to see you in incubator`)
})