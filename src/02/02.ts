export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}
type AddressType = {
    streetTitle: string
    city: CityType
}
type CityType = {
    title: string
    countryTitle: string
}
type TechType = {
    id: number
    title: string
}

const student: StudentType = {
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

console.log(student.age)
console.log(student.name)
