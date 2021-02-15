const ages = [10, 1, 22, 99, 14, 15, 25, 34, 45, 52, 65, 35];

export function predicate(age: number) {
    return age > 60
}

export const courses: Array<CourseType> = [
    { title: 'HTML', price: 100 },
    { title: 'JS', price: 150 },
    { title: 'React', price: 200 }, 
]

type CourseType = {
    title: string
    price: number
}
export function cheapCoursesFunction(course: CourseType) {
    return course.price < 160
}
