"use strict";

const

    // Объекты для хранения данных состояния
    archer = {},
    wizard = {},
    warrior = {},

    //Характеристики героев!!!
    setHero = {
        setArcher: () => {
            archer.name = "Legolas";
            archer.type = "archer";
            archer.hp = 350;
            archer.armor = 30;
            archer.agility = 80;
            archer.magic = 30;
            archer.power = 50;
            archer.luck = 0.258;
        },
        setWizard: () => {
            wizard.name = "Gendalf";
            wizard.type = "wizard";
            wizard.hp = 300;
            wizard.armor = 20;
            wizard.agility = 30;
            wizard.magic = 80;
            wizard.power = 40;
            wizard.luck = 0.312;
        },
        setWarrior: () => {
            warrior.name = "Aragorn";
            warrior.type = "warrior";
            warrior.hp = 400;
            warrior.armor = 40;
            warrior.agility = 50;
            warrior.magic = 30;
            warrior.power = 80;
            warrior.luck = 0.28;
        }
    },

    //Объект для показа статуса героя
    getHero = {
        getArcher: () => {
            console.log("Status now:");
            console.log("Hp = " + archer.hp);
            console.log("armor = " + archer.armor);
            console.log("agility = " + archer.agility);
            console.log("magic = " + archer.magic);
            console.log("power = " + archer.power);
            console.log("luck = " + archer.luck);
        },
        getWizard: () => {
            console.log("Status now:");
            console.log("Hp = " + wizard.hp);
            console.log("armor = " + wizard.armor);
            console.log("agility = " + wizard.agility);
            console.log("magic = " + wizard.magic);
            console.log("power = " + wizard.power);
            console.log("luck = " + wizard.luck);
        },
        getWarrior: () => {
            console.log("Status now:");
            console.log("Hp = " + warrior.hp);
            console.log("armor = " + warrior.armor);
            console.log("agility = " + warrior.agility);
            console.log("magic = " + warrior.magic);
            console.log("power = " + warrior.power);
            console.log("luck = " + warrior.luck);
        },
    },

    //Случайное число от 9 до 99
    getRandomInt = () => {
        return Math.floor(Math.random() * (99 - 9)) + 9;
    },

    //Вычисляем атаку Мечём!!!
    attackSword = (a) => {
        let random = getRandomInt();
        a.attack = (a.power * (random / 100)) - (a.agility / (random * 100));
        console.log(a.name + " ударил мечём на " + a.attack + " урона");
    },

    //Вычисляем атаку Луком!!!
    attackBow = (a) => {
        let random = getRandomInt();
        a.attack = (a.agility * (random / 100)) - (a.power / (random * 100));
        console.log(a.name + " пустил стрелу на " + a.attack + " урона");
    },

    //Вычисляем атаку Волшебством!!!
    attackMagic = (a) => {
        let random = getRandomInt();
        a.attack = a.magic * (random / 100);
        console.log(a.name + " использовал заклятие  на " + a.attack + " урона");
    },



    //Создаём монстров
    m0 = {},
    m1 = {},
    m2 = {},
    m3 = {},
    m4 = {},
    m5 = {},
    m6 = {},
    m7 = {},
    m8 = {},
    m9 = {},

    //Характеристики монстров
    setMonstr = {
        set0: () => {
            m0.name = "Уебан";
            m0.type = "monster";
            m0.hp = 150;
            m0.armor = 100;
            m0.agility = 20;
            m0.magic = 0;
            m0.power = 40;
            m0.luck = 0.08;
        },
        set1: () => {
            m1.name = "Властелин Пипца";
            m1.type = "monster";
            m1.hp = 350;
            m1.armor = 0;
            m1.agility = 25;
            m1.magic = 0;
            m1.power = 50;
            m1.luck = 0.08;
        }
    },

    //Да начнёться битва!!!
    startFigth = (a, b) => {
        console.log("Да начнёться БИТВА!!!!");
        console.log(`${a.name.toUpperCase()} против ${b.name.toUpperCase()}`);

        console.log("------------------------------");
        do {
            let randomForFigth = getRandomInt();
            randomForFigth /= 100;
            console.log("Счастливое число = " + randomForFigth + " твоё счастливое число = " + a.luck);

            if (a.type == "archer") {
                attackBow(a);
            }
            if (a.type == "wizard") {
                attackMagic(a);
            }
            if (a.type == "warrior") {
                attackSword(a);
            }

            console.log(`Ты атакуешь ${b.name} у которого ${b.hp}  и ${b.armor} брони`);

            if (randomForFigth >= a.luck) {
                if (b.armor > 0) {
                    let countArmor = b.armor - a.attack;
                    if (countArmor < 0) {
                        b.armor -= a.attack;
                        b.hp += countArmor;
                        console.log(`Тебе не повезло ты ударил в броню ${a.attack} и снёс всю броню!!! Поскольку брони было мало для такого урона был нанесён дополнительный урон в ХП ${(-1)*countArmor}`);
                        b.armor = 0;
                    } else {
                        b.armor -= a.attack;
                        console.log(`Тебе не повезло ты ударил в броню ${a.attack}`);
                    }

                } else {
                    console.log(`Тебе повезло у ${b.name}а нет брони и ударил сквозь броню ${a.attack}`);
                    b.hp -= a.attack;
                }
            } else {
                console.log(`Тебе повезло ты ударил сквозь броню ${a.attack}`);
                b.hp -= a.attack;
            }

            console.log(`Наресенно уронна ${a.attack}`);
            console.log(`У ${b.name}а осталось ${b.hp} ХП и ${b.armor} брони`);
            if (b.hp <= 0) {
                break;
            }
            
            attackSword(b);
            a.hp -= b.attack;
            console.log(`${b.name} Ударил нас на ${b.attack} урона`);
            console.log(`У тебя осталось ${a.hp} ХП`);
            console.log("------------------------------");
            if (a.hp <= 0) {
                break;
            }
        } while (b.hp >= 0 || a.hp >= 0);

        if (a.hp <= 0) {
            console.log(`Ты ПРОИГРАЛ ${a.name}`);
        }
        if (b.hp <= 0) {
            console.log(`Ты победил ${a.name}!!! ${b.name} - повержен`);
        }
    },

    //Сброс данных
    reset = () => {
        setHero.setArcher();
        setHero.setWizard();
        setHero.setWarrior();
        setMonstr.set0();
        setMonstr.set1();
    };



//Генерируем героев
setHero.setArcher();
setHero.setWarrior();
setHero.setWizard();

setMonstr.set0();
setMonstr.set1();





//Провека атаки для баланса
// {
//     attackSword(archer);
//     attackSword(wizard);
//     attackSword(warrior);
//     console.log("------------------------------");

//     attackMagic(archer);
//     attackMagic(wizard);
//     attackMagic(warrior);
//     console.log("------------------------------");

//     attackBow(archer);
//     attackBow(wizard);
//     attackBow(warrior);
//     console.log("------------------------------");

//     attackSword(m0);
//     attackSword(m1);
//     console.log("------------------------------");
// }

//Битва МАГА с Уебаном
// startFigth(wizard, m0);
// console.log("------------------------------");
// console.log("------------------------------");
// console.log("Состояние МАГА после битвы:");
// getHero.getWizard();


// //Битва ЛУЧНИКА с Уебаном
// startFigth(archer, m0);
// console.log("------------------------------")
// console.log("------------------------------")
// console.log("Состояние ЛУЧНИКА после битвы:")
// getHero.getArcher();

// //Битва ВОИНА с Властелином Пипца
// startFigth(warrior, m1);
// console.log("------------------------------")
// console.log("------------------------------")
// console.log("Состояние ВОИНА после битвы:")
// getHero.getWarrior();