import { CityType, HouseType, GovernmentBuildingsType } from "../02_objects/02";

export function demolishesHousesOfStreets(city: CityType, streetName: string) {
    city.houses = city.houses.filter(oneHouse => oneHouse.address.street.title !== streetName)
}

export function getHousesOnTheStreet(houses: Array<HouseType>, streetName: string) {
    houses = houses.filter(oneHouse => oneHouse.address.street.title === streetName)
}

export function getBuildingsWithCorrectStaff(buildings: Array<GovernmentBuildingsType>, count: number) {
    return buildings.filter(oneBuild => oneBuild.staffCount > count )
}