
export const predicate = (age: number) => {
    return age > 90
}

type CourseType = {
    title: string
    price: number
}

export const chiPredicate = (courses: CourseType) => {
    return courses.price < 160
}
