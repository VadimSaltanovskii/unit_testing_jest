import { CityType, kingKong } from './02'

test('Сравнение обьектов', () => { // пропуск теста skip
    expect(kingKong).toEqual({
        name: 'Kong',
        age: 500,
        isKing: true,
        isAlive: true,
        skills: ['Power', 'Speed', 'Mind control', 'Battle roar'],
        area: {
            name: 'Skull Island',
            isolated: true,
            ecology: 100,
        }
    })
})

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
                repaired: true,
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

// 1. Протипизируйте city
// 2. Заполните city чтобы тесты прошли
test('Проверка свойств houses и citizenNumber', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('White street')

    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('Happy street')

    expect(city.houses[2].buildedAt).toBe(2015)
    expect(city.houses[2].repaired).toBe(true)
    expect(city.houses[2].address.number).toBe(95)
    expect(city.houses[2].address.street.title).toBe('New street')

    expect(city.citizenNumber).toBeTruthy()
    expect(city.citizenNumber).toBeLessThan(15000000)

})

// 2. Заполните city чтобы тесты прошли
test('Проверка свойства governmentBuildings', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str')

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION')
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe('South Str')
})