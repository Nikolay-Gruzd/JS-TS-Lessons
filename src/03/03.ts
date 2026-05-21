import {StudentType} from "../02/02.ts";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02.ts";

export const sum = (a: number, b: number) => {
    return a + b
}

export const addTech = (student: StudentType, technology: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: technology
    })
}

export const switchStudentActive = (student: StudentType) => {
    !student.isActive ?
        student.isActive = true : student.isActive = false
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.address.city.title === city;
}

export const changeMoneyToBudget = (building: GovernmentBuildingsType,
                                    budget: number) => {

    building.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType,
                            staffCountToFire: number) => {

    building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingsType,
                            staffCountToHire: number) => {

    building.staffCount += staffCountToHire
}

export const createMessage = (city: CityType) => {
    return (
        'Hello ' + city.title + ' citizens. I want you be happy. All '
        + city.citizensNumber + ' men'
    )
}