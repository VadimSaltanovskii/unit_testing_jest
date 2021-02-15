import { CityType } from "../02_objects/02";
import { demolishesHousesOfStreets, getHousesOnTheStreet, getBuildingsWithCorrectStaff } from "./04_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'Austin',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2015,
                repaired: false,
                address: {
                    number: 95,
                    street: {
                        title: 'Happy street'
                    }
                }
            }],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 100,
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 100,
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizenNumber: 1000000,
    }
})

test('Дома должны быть уничтожены', () => {
    demolishesHousesOfStreets(city, 'Happy street');

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithCorrectStaff(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toEqual('FIRE-STATION')
})