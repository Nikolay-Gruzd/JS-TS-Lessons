import {beforeEach, expect, test} from "vitest";
import {StudentType} from "../02/02.ts";
import {addTech, doesStudentLiveIn, switchStudentActive} from "./03.ts";

let student: StudentType

beforeEach( () => {
    student = {
        id: 1,
        name: 'Nikolay',
        age: 27,
        isActive: true,
        address: {
            streetTitle: 'Lenina',
            city: {
                title: 'Irkutsk',
                countryTitle: 'Russia'
            },
        },
        technologies: [
            {
                id: 1,
                title: 'HTML',
            },
            {
                id: 2,
                title: 'CSS',
            },
            {
                id: 3,
                title: 'React',
            },
        ],
    }
} )

test('new technology should be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addTech(student, 'JavaScript')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JavaScript')
})

test('student is active', () => {
    expect(student.isActive).toBe(true)

    switchStudentActive(student)

    expect(student.isActive).toBe(false)
})

test('does student live in city?', () => {
    let res1 = doesStudentLiveIn(student, 'Moscow')
    let res2 = doesStudentLiveIn(student, 'Irkutsk')

    expect(res1).toBe(false)
    expect(res2).toBe(true)
})