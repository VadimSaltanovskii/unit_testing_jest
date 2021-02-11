import { MonsterType, kingKong } from "../02_objects/02"
import { addMonsterSkill, addStatusChangeName, checkArea } from "./03"

let monster: MonsterType;
beforeEach(() => {
    monster = kingKong
})

test('Новый скил монстра должен быть добавлен', () => {
    expect(monster.skills.length).toBe(4)
    addMonsterSkill(monster, 'Atomic axe')

    expect(monster.skills).toContain('Atomic axe')
    expect(monster.skills.length).toBe(5)
})

test('Имя монстра должно измениться', () => {
    addStatusChangeName(monster, "King")
    expect(monster.name).toBe('King Kong')
})

test('Кинг Конг король?', () => {
    expect(monster).toBeTruthy()
})

test('Проверка среды обитания', () => {
    let area1 = checkArea(monster, 'Island')
    let area2 = checkArea(monster, 'Skull Island')

    expect(area1).toBeFalsy()
    expect(area2).toBeTruthy()
})