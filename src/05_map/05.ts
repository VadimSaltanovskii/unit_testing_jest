import { GovernmentBuildingsType, HouseType } from '../02_objects/02'

export type PeopleType = {
    name: string
    age: number
    isMarried: boolean
}

type PeopleAfterStudy = {
    stack: Array<string>
    firstName: string
    lastName: string
    isMarried: boolean
}

let peoples: Array<PeopleType> = [
    { name: 'Ivan Ivanov', age: 35, isMarried: true },
    { name: 'Sergey Sergeev', age: 25, isMarried: false },
    { name: 'Egor Egorov', age: 18, isMarried: false },
]

function afterStudy(onePeople: PeopleType) {
    return {
        stack: ['HTML', 'CSS', 'JS', 'React', 'Redux'],
        firstName: onePeople.name.split(' ')[0],
        lastName: onePeople.name.split(' ')[1],
        isMarried: onePeople.isMarried
    }
}

const peoplesAfterStudy: Array<PeopleAfterStudy> = [
    afterStudy(peoples[0]),
    afterStudy(peoples[1]),
    afterStudy(peoples[2]),
]

// console.log(peoplesAfterStudy);

const peoplesAfterStudyMapped: Array<PeopleAfterStudy> = peoples.map(afterStudy)

console.log(peoplesAfterStudyMapped);


export function getStreetsTitlesOfGovernmentBuildings(buildings: Array<GovernmentBuildingsType>) {
    return buildings.map((oneBuild) => {
        return oneBuild.address.street.title
    })
}


export function getStreetsTitlesOfHouses(houses: Array<HouseType>) {
    return houses.map((oneHouse) => {
        return oneHouse.address.street.title
    })
}

export function createMessages(houses: Array<HouseType>) {
    return houses.map((oneHouse) => {
        return `Hello peoples of ${oneHouse.address.street.title}`
    })
}

export function createIndexes(houses: Array<HouseType>) {
    return houses.map((oneHouse, index) => {
        return index
    })
}
