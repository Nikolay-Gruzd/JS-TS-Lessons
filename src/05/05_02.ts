import {GovernmentBuildingsType, HouseType} from "../02/02_02.ts";

export const getStreetsTitlesOfGovernmentsBuildings = (
    governmentBuildings: Array<GovernmentBuildingsType>) => {
    return governmentBuildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export const createGreetingMessagesForStreets = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}