export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
type CompanyType = {
    id: number,
    title: string
};
export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export function makeHairStyle(user: UserType, power: number) {
    return {
        ...user,
        hair: user.hair / power
    }
    //copy.hair = user.hair / power
}

export function moveUser(user: UserWithLaptopType, cityTitle: string) {
    return {
        ...user,
        address: {
            ...user.address,
            city: cityTitle
        }
    }
    // copy.address = {
    //     ...copy.address,
    //     city: cityTitle
    // }
}

export function moveUserToOtherHouse(
    user: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...user,
        address: {
            ...user.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(user: UserWithLaptopType, laptopTitle: string) {
    return {
        ...user,
        laptop: {
            ...user.laptop,
            title: laptopTitle
        }
    }
}

export function addNewBookToUser(
    user: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...user,
        books: [...user.books, newBook],
    }
}

export function updateBookToUser(
    user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...user,
        books: user.books.map(b => b === oldBook ? newBook : b)
    }
}

export function removeBookToUser(
    user: UserWithLaptopType & UserWithBooksType, deleteBook: string) {
    return {
        ...user,
        books: user.books.filter(b => b !== deleteBook)
    }
}

export function updateCompanyTitle(
    user: WithCompaniesType, companyId: number, newTitle: string) {
    return {
        ...user,
        companies: user.companies.map(c => c.id === companyId
            ? {...c, title: newTitle}
            : c),
    }
}

export function updateCompanyTitle2(
    companies: {[key: string]: Array<CompanyType>},
    userName: string,
    companyId: number,
    newTitle: string) {

    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId
        ? {...c, title: newTitle} : c)

    return companyCopy
}

