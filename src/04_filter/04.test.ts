import { predicate, cheapCoursesFunction, courses } from './04'

test('Выбрать пенсионеров старше 60 лет', () => {
    const ages = [10, 1, 22, 99, 14, 15, 25, 34, 45, 52, 65, 35];
    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(2)
    expect(oldAges[1]).toBe(65)
})

test('Выбрать дешевые курсы', () => {
    const cheapCourses = courses.filter(cheapCoursesFunction)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[1].price).toBe(150)
    expect(cheapCourses[0].title).toEqual('HTML')
})

test('Get only completed tasks', () => {
    const tasks = [
        { id: 1, title: 'Bread', isDone: true },
        { id: 2, title: 'Milk', isDone: true },
        { id: 3, title: 'Ham', isDone: true },
        { id: 4, title: 'Meat', isDone: false },
        { id: 5, title: 'Sugar', isDone: false },
    ]

    const completedTasks = tasks.filter(oneTask => oneTask.isDone)

    expect(completedTasks.length).toBe(3)
    expect(completedTasks[1].title).toEqual('Milk')
    expect(completedTasks[2].id).toBe(3)
})