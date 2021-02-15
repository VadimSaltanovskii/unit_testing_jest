type AreaType = {
    name: string
    isolated: boolean
    ecology: number
}

export type MonsterType = {
    name: string
    age: number
    isKing: boolean
    isAlive: boolean
    skills: Array<string>
    area: AreaType
}

export type StreetType = {
    title: string
}
export type AddressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    id?: number
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
}


export const kingKong: MonsterType = {
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
}
