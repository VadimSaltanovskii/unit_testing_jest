import { CityType } from "../02_objects/02";
import { getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses, createMessages, createIndexes } from './05'

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

test('List of streets titles of government buildings', () => {
    let streets = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings)

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('Central Str')
    expect(streets[1]).toBe('South Str')
})

test('list of streets titles', () => {
    let streets = getStreetsTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('Happy street')
})

test('Create greeting messages for streets', () => {
    let greetings = createMessages(city.houses)

    let indexes = createIndexes(city.houses)

    expect(greetings.length).toBe(3)
    expect(greetings[1]).toBe('Hello peoples of Happy street')
    expect(greetings[2]).toBeTruthy()

    expect(indexes.length).toBe(3)
    expect(indexes).toEqual([0, 1, 2])
})