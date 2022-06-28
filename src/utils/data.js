//index : ['name', 'housingSpace', 'townhallRequired', 'idURL']
export const TROOPS = [ 
    //Troops
    /*0*/['Barbarian', 1, 1, '0'],
    /*1*/['Archer', 1, 1, '1'],
    /*2*/['Giant', 5, 1, '3'],
    /*3*/['Goblin', 1, 2, '2'],
    /*4*/['Wall Breaker', 2, 3, '4'],
    /*5*/['Balloon', 5, 4, '5'],
    /*6*/['Wizard', 4, 5, '6'],
    /*7*/['Healer', 14, 6, '7'],
    /*8*/['Dragon', 20, 7, '8'],
    /*9*/['P.E.K.K.A', 25, 8, '9'],
    /*10*/['Baby Dragon', 10, 9, '23'],
    /*11*/['Miner', 6, 10, '24'],
    /*12*/['Electro Dragon', 30, 11, '59'],
    /*13*/['Yeti', 18, 12, '53'],
    /*14*/['Dragon Rider', 25, 13, ''],
    
    //Dark Troops
    /*15*/['Minion', 2, 7, '10'],
    /*16*/['Hog Rider', 5, 7, '11'],
    /*17*/['Valkyrie', 8, 8, '12'],
    /*18*/['Golem', 30, 8, '13'],
    /*19*/['Witch', 12, 9, '15'],
    /*20*/['Lava Hound', 30, 9, '17'],
    /*21*/['Bowler', 6, 10, '22'],
    /*22*/['Ice Golem', 15, 11, '58'],
    /*23*/['Headhunter', 6, 12, '82'],
  
    //Siege Machines
    /*24*/['Wall Wrecker',1,12,'51'],
    /*25*/['BattleBlimp',1,12,'52'],
    /*26*/['Stone Slammer',1,12,'62'],
    /*27*/['Siege Barracks',1,13,''],
    /*28*/['Log Launcher',1,13,''],
    /*29*/['Flame Flinger',1,14,'']
  
    //Super Troops
];

//index : ['name', 'housingSpace', 'townhallRequired', 'idURL']
export const SPELLS = [
    //Spells
    /*0*/['Lightning', 1, 5, '0'],
    /*1*/['Healing', 2, 6, '1'],
    /*2*/['Rage', 2, 7, '2'],
    /*3*/['Jump', 2, 9, '3'],
    /*4*/['Freeze', 1, 9, '5'],
    /*5*/['Clone', 3, 10, '16'],
    /*5*/['Invisibility', 1, 11, '35'],
  
    //Dark Spells
    /*7*/['Poison', 1, 8, '9'],
    /*8*/['Earthquake', 1, 8, '10'],
    /*8*/['Haste', 1, 9, '11'],
    /*10*/['Skeleton', 1, 9, '17'],
    /*11*/['Bat', 1, 10, '28']
];

//TH_level : max_troops
export const MAXTROOPS = {
    '1' : 20,
    '2' : 30,
    '3' : 70,
    '4' : 80,
    '5' : 135,
    '6' : 150,
    '7' : 200,
    '8' : 200,
    '9' : 220,
    '10' : 240,
    '11' : 260,
    '12' : 280,
    '13' : 300,
    '14' : 300
};

//TH_level : max_spells
export const MAXSPELLS = {
    '1' : 0,
    '2' : 0,
    '3' : 0,
    '4' : 0,
    '5' : 2,
    '6' : 4,
    '7' : 6,
    '8' : 7,
    '9' : 9,
    '10' : 10,
    '11' : 11,
    '12' : 11,
    '13' : 11,
    '14' : 11
};

//TH_level : max_spells
export const MAXMACHINES = {
    '1' : 0,
    '2' : 0,
    '3' : 0,
    '4' : 0,
    '5' : 0,
    '6' : 0,
    '7' : 0,
    '8' : 0,
    '9' : 0,
    '10' : 1,
    '11' : 1,
    '12' : 1,
    '13' : 1,
    '14' : 1
};

//current highest TH
export const HIGHEST_TH = 14;