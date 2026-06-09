import {expect, test} from "vitest";
import {
    addNewBookToUser,
    makeHairStyle,
    moveUser, moveUserToOtherHouse, removeBookToUser, updateBookToUser, updateCompanyTitle,
    updateCompanyTitle2,
    upgradeUserLaptop,
    UserType, UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10.ts";

test('hair test', ()=>{

    let user: UserType = {
        name: 'Nikolay',
        hair: 32,
        address:{
            city: 'Irkutsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    //user = awesomeUser

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', ()=>{

    let user: UserWithLaptopType = {
        name: 'Nikolay',
        hair: 32,
        address:{
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Minsk')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)

    expect(user.address.city).toBe('Irkutsk')
    expect(movedUser.address.city).toBe('Minsk')

})

test('upgrade laptop to macbook', ()=>{

    let user: UserWithLaptopType = {
        name: 'Nikolay',
        hair: 32,
        address:{
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradedUserLaptop = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedUserLaptop)
    expect(user.laptop).not.toBe(upgradedUserLaptop.laptop)
    expect(user.address).toBe(upgradedUserLaptop.address)

    expect(user.laptop.title).toBe('ZenBook')
    expect(upgradedUserLaptop.laptop.title).toBe('Macbook')
})

test('change address house', ()=>{

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nikolay',
        hair: 32,
        address:{
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedUserToOtherHouse = moveUserToOtherHouse(user, 10)

    expect(user).not.toBe(movedUserToOtherHouse)
    expect(user.address).not.toBe(movedUserToOtherHouse.address)

    expect(user.address.house).toBe(12)
    expect(movedUserToOtherHouse.address.house).toBe(10)
})

test('add new book to user', ()=>{

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nikolay',
        hair: 32,
        address:{
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const addedNewBookToUser = addNewBookToUser(user, 'ts')

    expect(user).not.toBe(addedNewBookToUser)
    expect(user.books).not.toBe(addedNewBookToUser.books)

    expect(user.books).toStrictEqual(['css', 'html', 'js', 'react'])
    expect(addedNewBookToUser.books).toStrictEqual(['css', 'html', 'js', 'react', 'ts'])
})

test('update book to user', ()=>{

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nikolay',
        hair: 32,
        address:{
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const updatedBookToUser = updateBookToUser(user, 'js', 'ts')

    expect(user).not.toBe(updatedBookToUser)
    expect(user.books).not.toBe(updatedBookToUser.books)

    expect(updatedBookToUser.books[2]).toBe('ts')
})

test('remove js book', ()=>{

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nikolay',
        hair: 32,
        address:{
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const removedBookToUser = removeBookToUser(user, 'js')

    expect(user).not.toBe(removedBookToUser)
    expect(user.books).not.toBe(removedBookToUser.books)

    expect(removedBookToUser.books.length).toBe(3)
    expect(removedBookToUser.books).toStrictEqual(['css', 'html', 'react'])
})

test('update companies', ()=>{

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Nikolay',
        hair: 32,
        address:{
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: '1'},
            {id: 2, title: '2'}
        ]
    }

    const updatedCompany = updateCompanyTitle(user, 2, 'new 2')

    expect(user).not.toBe(updatedCompany)
    expect(user.companies).not.toBe(updatedCompany.companies)

    expect(updatedCompany.companies.length).toBe(2)
    expect(updatedCompany.companies).toStrictEqual([
        {id: 1, title: '1'},
        {id: 2, title: 'new 2'}
    ])
})

test('update company', ()=>{

    // let user: UserWithLaptopType = {
    //     name: 'Nikolay',
    //     hair: 32,
    //     address:{
    //         city: 'Irkutsk',
    //         house: 12
    //     },
    //     laptop: {
    //         title: 'ZenBook'
    //     }
    // }

    let companies = {
        'Nikolay': [{id: 1, title: '1'}, {id: 2, title: '2'}],
        'Dimych': [{id: 1, title: 'IT-INCUBATOR'}]
    }

    const copyCompany = updateCompanyTitle2(companies, 'Nikolay', 2, 'IT-INCUBATOR')

    expect(companies).not.toBe(copyCompany)
    expect(companies['Nikolay']).not.toBe(copyCompany['Nikolay'])

    expect(copyCompany['Nikolay']).toStrictEqual([{id: 1, title: '1'}, {id: 2, title: 'IT-INCUBATOR'}])
})
