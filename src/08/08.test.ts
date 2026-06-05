import {beforeEach, expect, test} from "vitest";

type UsersType = {
    [key: string]: {id: number, name: string}
}
let users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '1602': {id: 1602, name: 'Natasha'},
    '1053': {id: 1053, name: 'Valera'},
    '14': {id: 14, name: 'Katya'},
}

beforeEach( () => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '1602': {id: 1602, name: 'Natasha'},
        '1053': {id: 1053, name: 'Valera'},
        '14': {id: 14, name: 'Katya'},
    }
})

test('should update corresponding user', () => {
    users['14'].name ='Ekaterina'
    expect(users[14].name).toBe('Ekaterina')

    delete users[14]
    expect(users[14]).toBeUndefined()
})