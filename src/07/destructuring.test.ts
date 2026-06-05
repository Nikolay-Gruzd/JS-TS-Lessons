import {beforeEach, expect, test} from "vitest";

type AddressType = {
    street: {
        title: string
    }
}
type LessonsType = {
    title: string
    name?: string
}
type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: AddressType
}

let props: ManType

beforeEach(() => {
    props = {
        name: 'Nikolay',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})

test('Test objects destructuring', () => {

    const {age, lessons, address: { street: { title } }} = props;
    // const { title } = props.address.street;

    expect(title).toBe('Nezavisimosti street')
    expect(age).toBe(32)
    expect(lessons.length).toBe(3)

})

test('Test array destructuring', () => {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [, ls2, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls2.title).toBe('2')

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0].name).toBe('react')

    expect(restLessons[0]).toStrictEqual({title:'3', name:'react'})
})