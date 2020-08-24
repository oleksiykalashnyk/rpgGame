"use strict";

const Hero = {
        hp: 0,
        armor: 0,
        agility: 0,
        magic: 0,
        power: 0,
        luck: 0
    },
    archer = {},
    wizard = {},
    warrior = {},
    setHero = {
        setArcher: () => {
            Object.setPrototypeOf(archer, Hero);
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
            Object.setPrototypeOf(wizard, Hero);
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
            Object.setPrototypeOf(warrior, Hero);
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


    getRandomInt = () => {
        return Math.floor(Math.random() * (9 - 5)) + 5;
    },

    attackSword = (a) => {
        let random = getRandomInt();
        a.attack = a.power * (((a.agility / random + (a.power / a.luck)) / (random)) / 100);
    },
    attackBow = (a) => {
        a.attack = ((a.power + (a.agility / a.luck)) / (a.luck)) / 100;
        console.log(a.attack);
    },
    attackMagic = (a) => {
        a.attack = ((a.agility + (a.power / a.luck)) / (a.luck)) / 100;
        console.log(a.attack);
    },

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

    setMonstr = {
        set0: () => {
            Object.setPrototypeOf(m0, Hero);
            m0.name = "Уебан";
            m0.type = "monster";
            m0.hp = 200;
            m0.armor = 0;
            m0.agility = 20;
            m0.magic = 0;
            m0.power = 40;
            m0.luck = 0.08;
        }
    },
    startFigth = (a, b) => {
        do {
            attackSword(a);
            attackSword(b);
            console.log(`Ты атакуешь ${b.name} у которого ${b.hp}`);
            b.hp -= a.attack;            
            console.log(`Наресенно уронна ${a.attack}`);
            console.log(`У ${b.name}а осталось ${b.hp}`);
            if (b.hp <= 0) {
                break;
              }
            a.hp -= b.attack;
            console.log(`${b.name} Ударил нас на ${b.attack} урона`);
            console.log(`У тебя осталось ${a.hp}`);
            console.log("");
            if (a.hp <= 0) {
                break;
              }
        }while (b.hp > 0);

        if (a.hp <= 0) {
            console.log(`Ты ПРОИГРАЛ ${a.name}`);
        }
        if (b.hp <= 0) {
            console.log(`Ты победил ${b.name}`);
        }
    };


setHero.setArcher();
setHero.setWarrior();
setHero.setWizard();

setMonstr.set0();

attackSword(archer);
attackSword(wizard);
attackSword(warrior);
attackSword(m0);


startFigth(archer, m0);