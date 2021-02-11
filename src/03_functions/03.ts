import { CityType, GovernmentBuildingsType, HouseType, kingKong, MonsterType } from '../02_objects/02'

export function addMonsterSkill(monster: MonsterType, skill: string) {
    monster.skills.push(skill)
}

export function addStatusChangeName(monster: MonsterType, newName: string) {
    monster.name = `${newName} ${monster.name}`
}

export function checkArea(monster: MonsterType, area: string) {
    return monster.area.name === area
}

export function addMoneyToBudget(
    building: GovernmentBuildingsType,
    money: number) {
        building.budget += money
}

export function repairHouse(house : HouseType) {
    house.repaired = true
}