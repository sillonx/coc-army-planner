import {
  TROOPS,
  SPELLS
} from './data';

//encode army into CoC share link
export function encodeLink(army) {
  let resStr = 'https://link.clashofclans.com/en?action=CopyArmy&army=';
  let troops = army[0];
  let spells = army[1];

  if (troops.length !== 0) {
    resStr += 'u';
    for (let i in troops) {
      resStr = resStr + troops[i][1].toString() + 'x' + TROOPS[troops[i][0]][4] + '-';
    }
    resStr = resStr.slice(0, -1);
  }
  
  if (spells.length !== 0) {
    resStr += 's';
    for (let i in spells) {
      resStr = resStr + spells[i][1].toString() + 'x' + SPELLS[spells[i][0]][4] + '-';
    }
    resStr = resStr.slice(0, -1);
  }

  return resStr;
} 
  
//decode CoC share link into army
export function decodeLink(url) {
  let troopsTab = [];
  let spellsTab = [];
  url = url.replace('https://link.clashofclans.com/en?action=CopyArmy&army=','');

  if (url.charAt(0) === 'u') {
    url = url.slice(1,);
    if (url.includes('s')) {
      let troops = url.split('s')[0];
      let spells = url.split('s')[1];
      troopsTab = splitAndConvert(troops,TROOPS);
      spellsTab = splitAndConvert(spells,SPELLS);
    }
    else {
      troopsTab = splitAndConvert(url,TROOPS);
    }
  }

  else if (url.charAt(0) === 's') {
    url = url.slice(1,);
    spellsTab = splitAndConvert(url,SPELLS);
  }

  return [troopsTab,spellsTab];
}

//create army tab for encoding
export function splitAndConvert(myString, myDic) {
  let resTab = []
  let allUnits = myString.split('-');

  for (let i in allUnits) {
    allUnits[i] = allUnits[i].split('x');
  }
  for (let j in allUnits) {
    resTab.push([findKeyOnProp(allUnits[j][1],myDic),parseInt(allUnits[j][0])]);
  }
  return resTab;
}
  
//Find key in dictionary having prop
export function findKeyOnProp(myProp, myDic) {
  let i = 0;
  let found = false;
  while (!found) {
    myDic[i][4] === myProp ? found = true : i++;
  }
  return i;
}

//Take array elements where cond only
export function arrayOnlyProp(myArray, myCond) {
  let resTab = []
  for (let i in myArray) {
    if (myArray[i][3] <= myCond) {
      resTab.push(myArray[i]);
    }
  }
  return resTab;
}

//Split arrays depending on type
export function divideArray() {
  let resTab = []
  let tempTab = []

  //Pink troops
  for (let i=0; i<15; i++) {
    tempTab.push(TROOPS[i]);
  }
  resTab.push(tempTab);
  tempTab = [];

  //Dark troops
  for (let i=15; i<24; i++) {
    tempTab.push(TROOPS[i]);
  }
  resTab.push(tempTab);
  tempTab = [];

  //Pink spells
  for (let i=0; i<7; i++) {
    tempTab.push(SPELLS[i]);
  }
  resTab.push(tempTab);
  tempTab = [];

  //Dark spells
  for (let i=7; i<11; i++) {
    tempTab.push(SPELLS[i]);
  }
  resTab.push(tempTab);
  tempTab = [];

  //Siege Machines
  for (let i=24; i<30; i++) {
    tempTab.push(TROOPS[i]);
  }
  resTab.push(tempTab);
  tempTab = [];

  //Super Troops
  for (let i=30; i<44; i++) {
    tempTab.push(TROOPS[i]);
  }
  resTab.push(tempTab);

  return resTab;
}