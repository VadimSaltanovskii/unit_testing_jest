import { CityType} from '../02_objects/02'
import { addMoneyToBudget, repairHouse } from './03';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'Austin',
        houses: [
            {
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
                buildedAt: 2015,
                repaired: false,
                address: {
                    number: 95,
                    street: {
                        title: 'New street'
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

//01. Тесты должны пройти
test('Измените бюджет госпиталя', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

test('Измените бюджет пожарной станции', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

// test('Здания должны быть уничтожены', () => {
//     demolishHouseOnTheStreet(city, 'Happy street')

//     expect(city.houses.length).toBe(1)
//     expect(city.houses[0].id).toBe(1)
// })
test('Дом должен быть починен', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})