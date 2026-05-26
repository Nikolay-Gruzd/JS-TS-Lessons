import {createGreetingMessage, ManType} from "./05.ts";
import {beforeEach, expect, test} from "vitest";

let people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitriy Sidorov', age: 18},
]

beforeEach( () => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitriy Sidorov', age: 18},
    ]
} )

test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)

    expect(messages[0]).toBe('Hellow Andrew! Welcome to IT-Incubator')
    expect(messages[1]).toBe('Hellow Alexander! Welcome to IT-Incubator')
    expect(messages[2]).toBe('Hellow Dmitriy! Welcome to IT-Incubator')
})