import {expect, test} from "vitest";
import {icreaseAge, pasportist, UserType} from "./09.ts";

test('reference type test', () => {

    let user: UserType = {
        name: 'Nikolay',
        age: 28
    }

    icreaseAge(user)

    expect(user.age).toBe(29)
})

test('value type test', () => {

    let usersCount = 100

    let adminsCount = usersCount

    adminsCount++

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})

test('array type test', () => {

    let users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Nikolay',
            age: 28
        }
    ]

    let admins = users

    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('array reference type test', () => {

    const address = {
        title: 'Irkutsk'
    }

    let user = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    let user2 = {
        name: 'Nikolay',
        age: 28,
        address: address
    }

    const users = [ user, user2, { name: 'Bandyugan', age: 18, address: address } ]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {

    const letters = ['a', 'c', 'b', 'f', 'e', 'd']
    //letters.sort()
    pasportist(letters)

    expect(letters).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
})