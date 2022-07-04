//[index, 'name', housingSpace, townhallRequired, 'idURL']
export const TROOPS = [ 
    //Troops
    [0,'Barbarian', 1, 1, '0'],
    [1,'Archer', 1, 1, '1'],
    [2,'Giant', 5, 1, '3'],
    [3,'Goblin', 1, 2, '2'],
    [4,'Wall Breaker', 2, 3, '4'],
    [5,'Balloon', 5, 4, '5'],
    [6,'Wizard', 4, 5, '6'],
    [7,'Healer', 14, 6, '7'],
    [8,'Dragon', 20, 7, '8'],
    [9,'P.E.K.K.A', 25, 8, '9'],
    [10,'Baby Dragon', 10, 9, '23'],
    [11,'Miner', 6, 10, '24'],
    [12,'Electro Dragon', 30, 11, '59'],
    [13,'Yeti', 18, 12, '53'],
    [14,'Dragon Rider', 25, 13, '65'],
    
    //Dark Troops
    [15,'Minion', 2, 7, '10'],
    [16,'Hog Rider', 5, 7, '11'],
    [17,'Valkyrie', 8, 8, '12'],
    [18,'Golem', 30, 8, '13'],
    [19,'Witch', 12, 9, '15'],
    [20,'Lava Hound', 30, 9, '17'],
    [21,'Bowler', 6, 10, '22'],
    [22,'Ice Golem', 15, 11, '58'],
    [23,'Headhunter', 6, 12, '82'],
  
    //Super Troops
    [24,'Super Barbarian',5,11,'26'],
    [25,'Super Archer',12,11,'27'],
    [26,'Super Giant',10,12,'29'],
    [27,'Sneaky Goblin',3,11,'55'],
    [28,'Super Wall Breaker',8,11,'28'],
    [29,'Rocket Balloon',8,12,'57'],
    [30,'Super Wizard',10,12,'83'],
    [31,'Super Dragon',40,12,'81'],
    [32,'Inferno Dragon',15,12,'63'],
    [33,'Super Minion',12,12,'84'],
    [34,'Super Valkyrie',20,12,'64'],
    [35,'Super Witch',40,12,'66'],
    [36,'Ice Hound',40,12,'76'],
    [37,'Super Bowler',30,12,'80'],

    //Siege Machines
    [38,'Wall Wrecker', 1, 12, '51'],
    [39,'BattleBlimp', 1, 12, '52'],
    [40,'Stone Slammer', 1, 12, '62'],
    [41,'Siege Barracks', 1, 13, '75'],
    [42,'Log Launcher', 1, 13, '87'],
    [43,'Flame Flinger', 1, 14, '91']
];

//[index, 'name', housingSpace, townhallRequired, 'idURL']
export const SPELLS = [
    //Spells
    [0,'Lightning', 1, 5, '0'],
    [1,'Healing', 2, 6, '1'],
    [2,'Rage', 2, 7, '2'],
    [3,'Jump', 2, 9, '3'],
    [4,'Freeze', 1, 9, '5'],
    [5,'Clone', 3, 10, '16'],
    [6,'Invisibility', 1, 11, '35'],
  
    //Dark Spells
    [7,'Poison', 1, 8, '9'],
    [8,'Earthquake', 1, 8, '10'],
    [9,'Haste', 1, 9, '11'],
    [10,'Skeleton', 1, 9, '17'],
    [11,'Bat', 1, 10, '28']
];

//TH_level : max_troops
export const MAX_TROOPS = {
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
export const MAX_SPELLS = {
    '1' : 0,
    '2' : 0,
    '3' : 0,
    '4' : 0,
    '5' : 2,
    '6' : 4,
    '7' : 6,
    '8' : 7,
    '9' : 9,
    '10' : 11,
    '11' : 11,
    '12' : 11,
    '13' : 11,
    '14' : 11
};

//TH_level : max_spells
export const MAX_MACHINES = {
    '1' : 0,
    '2' : 0,
    '3' : 0,
    '4' : 0,
    '5' : 0,
    '6' : 0,
    '7' : 0,
    '8' : 0,
    '9' : 0,
    '10' : 0,
    '11' : 0,
    '12' : 1,
    '13' : 1,
    '14' : 1
};

//TH_level : max_boosted
export const MAX_BOOSTED = {
    '1' : 0,
    '2' : 0,
    '3' : 0,
    '4' : 0,
    '5' : 0,
    '6' : 0,
    '7' : 0,
    '8' : 0,
    '9' : 0,
    '10' : 0,
    '11' : 2,
    '12' : 2,
    '13' : 2,
    '14' : 2
};

//TH_level : max_barracks
export const MAX_BARRACKS = {
    '1' : 3,
    '2' : 4,
    '3' : 5,
    '4' : 6,
    '5' : 7,
    '6' : 8,
    '7' : 9,
    '8' : 10,
    '9' : 11,
    '10' : 12,
    '11' : 13,
    '12' : 14,
    '13' : 15,
    '14' : 15
};

//TH_level : max_dark_barracks
export const MAX_DARK_BARRACKS = {
    '1' : 0,
    '2' : 0,
    '3' : 0,
    '4' : 0,
    '5' : 0,
    '6' : 0,
    '7' : 2,
    '8' : 4,
    '9' : 6,
    '10' : 7,
    '11' : 8,
    '12' : 9,
    '13' : 9,
    '14' : 9
};

//TH_level : max_spell_factory
export const MAX_SPELL_FACTORY = {
    '1' : 0,
    '2' : 0,
    '3' : 0,
    '4' : 0,
    '5' : 1,
    '6' : 2,
    '7' : 3,
    '8' : 3,
    '9' : 4,
    '10' : 5,
    '11' : 6,
    '12' : 6,
    '13' : 6,
    '14' : 6
};

//TH_level : max_dark_spell_factory
export const MAX_DARK_SPELL_FACTORY = {
    '1' : 0,
    '2' : 0,
    '3' : 0,
    '4' : 0,
    '5' : 0,
    '6' : 0,
    '7' : 0,
    '8' : 2,
    '9' : 4,
    '10' : 5,
    '11' : 5,
    '12' : 5,
    '13' : 5,
    '14' : 5
};

//TH_level : max_dark_spell_factory
export const MAX_WORKSHOP = {
    '1' : 0,
    '2' : 0,
    '3' : 0,
    '4' : 0,
    '5' : 0,
    '6' : 0,
    '7' : 0,
    '8' : 0,
    '9' : 0,
    '10' : 0,
    '11' : 0,
    '12' : 3,
    '13' : 5,
    '14' : 6
};

//current highest TH
export const HIGHEST_TH = 14;