import React from 'react';
import { useState } from 'react';

//MUI elements imports
import { 
    Stack,
    Slider,
    Avatar,
    Typography,
    TextField,
    Button,
    IconButton,
    Fade
} from '@mui/material';

//MUI Icons imports
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

//Variables imports
import {
    TROOPS,
    SPELLS,
    MAX_TROOPS,
    MAX_SPELLS,
    MAX_BOOSTED,
    MAX_MACHINES,
    HIGHEST_TH
} from '../utils/data';

//Functions imports
import {
    arrayOnlyProp,
    divideArray,
    decodeLink,
    encodeLink
} from '../utils/functions';

// Troops and spells images imports (https://clashofclans.fandom.com/wiki/Army)
import barbarian from '../static/images/troops/barbarian.png';
import archer from '../static/images/troops/archer.png';
import giant from '../static/images/troops/giant.png';
import goblin from '../static/images/troops/goblin.png';
import wall_breaker from '../static/images/troops/wall_breaker.png';
import balloon from '../static/images/troops/balloon.png';
import wizard from '../static/images/troops/wizard.png';
import healer from '../static/images/troops/healer.png';
import dragon from '../static/images/troops/dragon.png';
import pekka from '../static/images/troops/pekka.png';
import baby_dragon from '../static/images/troops/baby_dragon.png';
import miner from '../static/images/troops/miner.png';
import electro_dragon from '../static/images/troops/electro_dragon.png';
import yeti from '../static/images/troops/yeti.png';
import dragon_rider from '../static/images/troops/dragon_rider.png';
import minion from '../static/images/troops/minion.png';
import hog_rider from '../static/images/troops/hog_rider.png';
import valkyrie from '../static/images/troops/valkyrie.png';
import golem from '../static/images/troops/golem.png';
import witch from '../static/images/troops/witch.png';
import lava_hound from '../static/images/troops/lava_hound.png';
import bowler from '../static/images/troops/bowler.png';
import ice_golem from '../static/images/troops/ice_golem.png';
import headhunter from '../static/images/troops/headhunter.png';

import super_barbarian from '../static/images/troops/super_barbarian.png';
import super_archer from '../static/images/troops/super_archer.png';
import super_giant from '../static/images/troops/super_giant.png';
import sneaky_goblin from '../static/images/troops/sneaky_goblin.png';
import super_wall_breaker from '../static/images/troops/super_wall_breaker.png';
import rocket_balloon from '../static/images/troops/rocket_balloon.png';
import super_wizard from '../static/images/troops/super_wizard.png';
import super_dragon from '../static/images/troops/super_dragon.png';
import inferno_dragon from '../static/images/troops/inferno_dragon.png';
import super_minion from '../static/images/troops/super_minion.png';
import super_valkyrie from '../static/images/troops/super_valkyrie.png';
import super_witch from '../static/images/troops/super_witch.png';
import ice_hound from '../static/images/troops/ice_hound.png';
import super_bowler from '../static/images/troops/super_bowler.png';

import wall_wrecker from '../static/images/troops/wall_wrecker.png';
import battle_blimp from '../static/images/troops/battle_blimp.png';
import stone_slammer from '../static/images/troops/stone_slammer.png';
import siege_barracks from '../static/images/troops/siege_barracks.png';
import log_launcher from '../static/images/troops/log_launcher.png';
import flame_flinger from '../static/images/troops/flame_flinger.png';

import lightning from '../static/images/spells/lightning.png';
import healing from '../static/images/spells/healing.png';
import rage from '../static/images/spells/rage.png';
import jump from '../static/images/spells/jump.png';
import freeze from '../static/images/spells/freeze.png';
import clone from '../static/images/spells/clone.png';
import invisibility from '../static/images/spells/invisibility.png';

import poison from '../static/images/spells/poison.png';
import earthquake from '../static/images/spells/earthquake.png';
import haste from '../static/images/spells/haste.png';
import skeleton from '../static/images/spells/skeleton.png';
import bat from '../static/images/spells/bat.png';


//Townhall images imports (https://clashofclans.fandom.com/wiki/Town_Hall)
import th1 from '../static/images/townhalls/th1.png';
import th2 from '../static/images/townhalls/th2.png';
import th3 from '../static/images/townhalls/th3.png';
import th4 from '../static/images/townhalls/th4.png';
import th5 from '../static/images/townhalls/th5.png';
import th6 from '../static/images/townhalls/th6.png';
import th7 from '../static/images/townhalls/th7.png';
import th8 from '../static/images/townhalls/th8.png';
import th9 from '../static/images/townhalls/th9.png';
import th10 from '../static/images/townhalls/th10.png';
import th11 from '../static/images/townhalls/th11.png';
import th12 from '../static/images/townhalls/th12.png';
import th13 from '../static/images/townhalls/th13.png';
import th14 from '../static/images/townhalls/th14.png';


var troopsImages = [
    barbarian,
    archer,
    giant,
    goblin,
    wall_breaker,
    balloon,
    wizard,
    healer,
    dragon,
    pekka,
    baby_dragon,
    miner,
    electro_dragon,
    yeti,
    dragon_rider,

    minion,
    hog_rider,
    valkyrie,
    golem,
    witch,
    lava_hound,
    bowler,
    ice_golem,
    headhunter,

    super_barbarian,
    super_archer,
    super_giant,
    sneaky_goblin,
    super_wall_breaker,
    rocket_balloon,
    super_wizard,
    super_dragon,
    inferno_dragon,
    super_minion,
    super_valkyrie,
    super_witch,
    ice_hound,
    super_bowler,

    wall_wrecker,
    battle_blimp,
    stone_slammer,
    siege_barracks,
    log_launcher,
    flame_flinger
];

var spellsImages = [
    lightning,
    healing,
    rage,
    jump,
    freeze,
    clone,
    invisibility,

    poison,
    earthquake,
    haste,
    skeleton,
    bat
]

var townHallsImages = [
    th1,
    th2,
    th3,
    th4,
    th5,
    th6,
    th7,
    th8,
    th9,
    th10,
    th11,
    th12,
    th13,
    th14
]

export default function MainPage() {

    const [importLink, setImportLink] = useState('');
    const [exportLink, setExportLink] = useState('');
    const [visible, setVisible] = useState(false);

    let tempTab = divideArray(TROOPS, SPELLS);
    const pTroops = tempTab[0];
    const dTroops = tempTab[1];
    const pSpells = tempTab[2];
    const dSpells = tempTab[3];
    const sTroops = tempTab[4];
    const sMachines = tempTab[5];

    //Array saving the current amount
    const [currentTownHall, setCurrentTownHall] = useState(HIGHEST_TH);
    const [currentTroopsCapacity, setCurrentTroopsCapacity] = useState(0);
    const [currentSpellsCapacity, setCurrentSpellsCapacity] = useState(0);
    const [currentBoostedUnits, setCurrentBoostedUnits] = useState(0);
    const [currentMachinesCapacity, setCurrentMachinesCapacity] = useState(0);

    //Arrays used to initialize
    var initTroops = []
    for (let i=0; i<TROOPS.length; i++) {
        initTroops.push(0);
    }
    var initSpells = []
    for (let i=0; i<SPELLS.length; i++) {
        initSpells.push(0);
    }

    //Arrays saving the last amount
    const [previousTroopsCapacity, setPreviousTroopsCapacity] = useState(initTroops);
    const [previousSpellsCapacity, setPreviousSpellsCapacity] = useState(initSpells);

    //Arrays used to import and export
    var troopsTab = [];
    for (let i=0; i<TROOPS.length; i++) {
        troopsTab.push([i,0]);
    }
    var spellsTab = [];
    for (let i=0; i<SPELLS.length; i++) {
        spellsTab.push([i,0]);
    }

    const [currentTroops, setCurrentTroops] = useState(troopsTab);
    const [currentSpells, setCurrentSpells] = useState(spellsTab);

    const handleSlideTH = (e) => {
        if (e.target.value !== currentTownHall) {
            setCurrentTownHall(e.target.value);
            setCurrentTroops(troopsTab);
            setCurrentSpells(spellsTab);
            setPreviousTroopsCapacity(initTroops);
            setPreviousSpellsCapacity(initSpells);
            setCurrentTroopsCapacity(0);
            setCurrentSpellsCapacity(0);
            setCurrentMachinesCapacity(0);
            setCurrentBoostedUnits(0);
        }
    };

    const handleChangeTroop = (e) => {
        //Force integer
        e.target.value = Math.floor(e.target.value);

        //Set variables used after
        let name = parseInt(e.target.name);
        let value = parseInt(e.target.value);
        let tTab = []
        for (let i=0; i<TROOPS.length; i++) {
            tTab.push(previousTroopsCapacity[i]);
        }
        var myTroops = []
        for (let i=0; i<TROOPS.length; i++) {
            myTroops.push(currentTroops[i]);
        }

        //Force unsigned
        if (value < 0) {
            e.target.value = 0;
            value = 0;
        }
        //Force max value
        if (value*TROOPS[name][2] > MAX_TROOPS[currentTownHall] - currentTroopsCapacity + previousTroopsCapacity[name]*TROOPS[name][2]) {
            e.target.value = Math.floor((MAX_TROOPS[currentTownHall] - currentTroopsCapacity + previousTroopsCapacity[name]*TROOPS[name][2]) / TROOPS[name][2]);
            value = e.target.value;
        }

        //Replace value
        let newValue = currentTroopsCapacity + (value - previousTroopsCapacity[name])*TROOPS[name][2];
        setCurrentTroopsCapacity(newValue);
        tTab[name] = value;
        setPreviousTroopsCapacity(tTab);

        myTroops[name][1] = value;
        setCurrentTroops(myTroops);
    }

    const handleChangeSpell = (e) => {
        //Force integer
        e.target.value = Math.floor(e.target.value);

        //Set variables used after
        let name = parseInt(e.target.name);
        let value = parseInt(e.target.value);
        let sTab = []
        for (let i=0; i<SPELLS.length; i++) {
            sTab.push(previousSpellsCapacity[i]);
        }
        var mySpells = []
        for (let i=0; i<SPELLS.length; i++) {
            mySpells.push(currentSpells[i]);
        }

        //Force unsigned
        if (value < 0) {
            e.target.value = 0;
            value = 0;
        }
        //Force max value
        if (value*SPELLS[name][2] > MAX_SPELLS[currentTownHall] - currentSpellsCapacity + previousSpellsCapacity[name]*SPELLS[name][2]) {
            e.target.value = Math.floor((MAX_SPELLS[currentTownHall] - currentSpellsCapacity + previousSpellsCapacity[name]*SPELLS[name][2]) / SPELLS[name][2]);
            value = e.target.value;
        }

        //Replace value
        let newValue = currentSpellsCapacity + (value - previousSpellsCapacity[name])*SPELLS[name][2];
        setCurrentSpellsCapacity(newValue);
        sTab[name] = value;
        setPreviousSpellsCapacity(sTab);

        mySpells[name][1] = value;
        setCurrentSpells(mySpells);
    }

    const handleChangeSTroop = (e) => {
        //Force integer
        e.target.value = Math.floor(e.target.value);

        //Set variables used after
        let name = parseInt(e.target.name);
        let value = parseInt(e.target.value);
        let tTab = []
        for (let i=0; i<TROOPS.length; i++) {
            tTab.push(previousTroopsCapacity[i]);
        }
        var myTroops = []
        for (let i=0; i<TROOPS.length; i++) {
            myTroops.push(currentTroops[i]);
        }

        //Force unsigned
        if (value < 0) {
            e.target.value = 0;
            value = 0;
        }
        //Force max value
        if (value*TROOPS[name][2] > MAX_TROOPS[currentTownHall] - currentTroopsCapacity + previousTroopsCapacity[name]*TROOPS[name][2]) {
            e.target.value = Math.floor((MAX_TROOPS[currentTownHall] - currentTroopsCapacity + previousTroopsCapacity[name]*TROOPS[name][2]) / TROOPS[name][2]);
            value = e.target.value;
        }
        
        //If increase
        if (value > previousTroopsCapacity[name]) {
            //If space for boost
            if (currentBoostedUnits < 2) {
                //Boost if it wasn't
                if (previousTroopsCapacity[name] === 0) {
                    setCurrentBoostedUnits(currentBoostedUnits+1);
                }
            }
            //If no space for boost
            else {
                //Nullify if it wasn't boosted
                if (previousTroopsCapacity[name] === 0) {
                    e.target.value = 0;
                    value = 0;
                }
            }
        }
        //If decrease to 0 AND wasn't already 0
        else if (value === 0 && previousTroopsCapacity[name] > 0) {
            setCurrentBoostedUnits(currentBoostedUnits-1);
        }

        //Replace value
        let newValue = currentTroopsCapacity + (value - previousTroopsCapacity[name])*TROOPS[name][2];
        setCurrentTroopsCapacity(newValue);
        tTab[name] = value;
        setPreviousTroopsCapacity(tTab);
        myTroops[name][1] = value;
        setCurrentTroops(myTroops);

    } 

    const handleChangeMachine = (e) => {
        //Force integer
        e.target.value = Math.floor(e.target.value);

        //Set variables used after
        let name = parseInt(e.target.name);
        let value = parseInt(e.target.value);
        let tTab = []
        for (let i=0; i<TROOPS.length; i++) {
            tTab.push(previousTroopsCapacity[i]);
        }
        var myTroops = []
        for (let i=0; i<TROOPS.length; i++) {
            myTroops.push(currentTroops[i]);
        }

        //Force unsigned
        if (value < 0) {
            e.target.value = 0;
            value = 0;
        }
        //Force max value
        if (value*TROOPS[name][2] > MAX_MACHINES[currentTownHall] - currentMachinesCapacity + previousTroopsCapacity[name]*TROOPS[name][2]) {
            e.target.value = Math.floor((MAX_MACHINES[currentTownHall] - currentMachinesCapacity + previousTroopsCapacity[name]*TROOPS[name][2]) / TROOPS[name][2]);
            value = e.target.value;
        }

        //Replace value
        let newValue = currentMachinesCapacity + (value - previousTroopsCapacity[name])*TROOPS[name][2];
        setCurrentMachinesCapacity(newValue);
        tTab[name] = value;
        setPreviousTroopsCapacity(tTab);

        myTroops[name][1] = value;
        setCurrentTroops(myTroops);
    } 

    const importArmy = (e) => {
        var armyTab = decodeLink(importLink);
        let importedTroops = armyTab[0];
        let importedSpells = armyTab[1];
        setCurrentTownHall(HIGHEST_TH);
        setCurrentTroops(importedTroops);
        setCurrentSpells(importedSpells);
        refreshCapacities(importedTroops,importedSpells);
    }

    function refreshCapacities(iTroops, iSpells) {

        var prevTroops = []
        for (let i=0; i<iTroops.length; i++) {
            prevTroops.push(iTroops[i][1]);
        }
        var prevSpells = []
        for (let i=0; i<iSpells.length; i++) {
            prevSpells.push(iSpells[i][1]);
        }
        
        setPreviousTroopsCapacity(prevTroops);
        setPreviousSpellsCapacity(prevSpells);

        let tempTab = divideArray(iTroops, iSpells);
        iTroops = tempTab[0].concat(tempTab[1].concat(tempTab[4]));
        iSpells = tempTab[2].concat(tempTab[3]);
        var iSMachines = tempTab[5];
        var iSTroops = tempTab[4];

        var newTC = 0;
        var newSC = 0;
        var newBC = 0;
        var newMC = 0;

        for (let i=0; i<iTroops.length; i++) {
            newTC+=iTroops[i][1]*TROOPS[i][2];
        }
        setCurrentTroopsCapacity(newTC);

        for (let i=0; i<iSpells.length; i++) {
            newSC+=iSpells[i][1]*SPELLS[i][2];
        }
        setCurrentSpellsCapacity(newSC);

        for (let i=0; i<iSMachines.length; i++) {
            newMC+=iSMachines[i][1];
        }
        setCurrentMachinesCapacity(newMC);

        for (let i=0; i<iSTroops.length; i++) {
            if (iSTroops[i][1] > 0) {
                newBC++;
            }
        }
        setCurrentBoostedUnits(newBC);
    }

    const exportArmy = (e) => {
        setExportLink(encodeLink([currentTroops, currentSpells]));
    }

    const copyClipboard = () => {
        navigator.clipboard.writeText(exportLink);
        setVisible(true);
        setTimeout(() => { setVisible(false); }, 2800);
      }

    return (
        <>
            <Stack direction='column' pt={5} spacing={2} alignItems='center' justifyContent='center'>
                <TextField sx={{ width:450 }} value={importLink} placeholder='https://link.clashofclans.com/en?action=CopyArmy&army=' onChange={(e) => setImportLink(e.target.value)}></TextField>
                <Button size='large' variant='contained' onClick={importArmy} endIcon={<FileDownloadIcon/>} sx={{ borderRadius:'16px', backgroundColor:'buttons.main', '&:hover': { backgroundColor:'buttons.main', boxShadow: 5, } }}>Import</Button>
            </Stack>

            <Stack direction='column' pt={5} spacing={2} alignItems='center' justifyContent='center'>
                <Avatar src={townHallsImages[currentTownHall-1]} variant='square' sx={{ width: 150, height: 150 }}/>
                <Typography>Troops Capacity : {currentTroopsCapacity}/{MAX_TROOPS[currentTownHall]}</Typography>
                {MAX_SPELLS[currentTownHall] === 0 ? <></> : <Typography>Spells Capacity : {currentSpellsCapacity}/{MAX_SPELLS[currentTownHall]}</Typography>}
                {MAX_BOOSTED[currentTownHall] === 0 ? <></> : <Typography>Boosted Units : {currentBoostedUnits}/{MAX_BOOSTED[currentTownHall]}</Typography>}
                {MAX_MACHINES[currentTownHall] === 0 ? <></> : <Typography>Siege Machines Capacity : {currentMachinesCapacity}/{MAX_MACHINES[currentTownHall]}</Typography>}
                <Slider value={currentTownHall} valueLabelDisplay="auto" min={1} max={HIGHEST_TH} onChange={handleSlideTH} sx={{ width:450 }}/>
            </Stack>

            <Stack direction='column' pt={5} spacing={5} alignItems='center' justifyContent='center'>
                <Stack direction='row' spacing={5} alignItems='flex-start' justifyContent='space-evenly'>
                    <Stack direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        <Typography>TROOPS</Typography>
                        {arrayOnlyProp(pTroops,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={3} alignItems='center' justifyContent='center'>
                                <Avatar src={troopsImages[index[0]]} variant='square' sx={{ width: 66, height: 66 }}/>
                                <Typography sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentTroops[index[0]][1]}
                                sx={{ width: 80 }}
                                onChange={handleChangeTroop}
                                />
                            </Stack>
                        ))}
                    </Stack>
                    <Stack direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        {currentTownHall >= 7 ? <Typography>DARK TROOPS</Typography> : <></>}
                        {arrayOnlyProp(dTroops,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={3} alignItems='center' justifyContent='center'>
                                <Avatar src={troopsImages[index[0]]} variant='square' sx={{ width: 66, height: 66 }}/>
                                <Typography sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentTroops[index[0]][1]}
                                sx={{ maxWidth: 80 }}
                                onChange={handleChangeTroop}
                                />
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
                
                <Stack direction='row' spacing={5} alignItems='flex-start' justifyContent='space-evenly'>
                    <Stack direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        {currentTownHall >= 5 ? <Typography>SPELLS</Typography> : <></>}
                        {arrayOnlyProp(pSpells,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={3} alignItems='center' justifyContent='center'>
                                <Avatar src={spellsImages[index[0]]} variant='square' sx={{ width: 66, height: 66 }}/>
                                <Typography sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentSpells[index[0]][1]}
                                sx={{ maxWidth: 80 }}
                                onChange={handleChangeSpell}
                                />
                            </Stack>
                        ))}
                    </Stack>
                    <Stack direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        {currentTownHall >= 8 ? <Typography>DARK SPELLS</Typography> : <></>}
                        {arrayOnlyProp(dSpells,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={3} alignItems='center' justifyContent='center'>
                                <Avatar src={spellsImages[index[0]]} variant='square' sx={{ width: 66, height: 66 }}/>
                                <Typography sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentSpells[index[0]][1]}
                                sx={{ maxWidth: 80 }}
                                onChange={handleChangeSpell}
                                />
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
                
                <Stack direction='row' spacing={5} alignItems='flex-start' justifyContent='space-evenly'>
                    <Stack direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        {currentTownHall >= 11 ? <Typography>SUPER TROOPS</Typography> : <></>}
                        {arrayOnlyProp(sTroops,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={3} alignItems='center' justifyContent='center'>
                                <Avatar src={troopsImages[index[0]]} variant='square' sx={{ width: 66, height: 66 }}/>
                                <Typography sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentTroops[index[0]][1]}
                                sx={{ maxWidth: 80 }}
                                onChange={handleChangeSTroop}
                                />
                            </Stack>
                        ))}
                    </Stack>
                    <Stack direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        {currentTownHall >= 12 ? <Typography>SIEGE MACHINES</Typography> : <></>}
                        {arrayOnlyProp(sMachines,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={3} alignItems='center' justifyContent='center'>
                                <Avatar src={troopsImages[index[0]]} variant='square' sx={{ width: 66, height: 66 }}/>
                                <Typography sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentTroops[index[0]][1]}
                                sx={{ maxWidth: 80 }}
                                onChange={handleChangeMachine}
                                />
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Stack>

            <Stack direction='column' pt={7} pb={5} spacing={2} alignItems='center' justifyContent='center'>
                <Stack pl={21} direction='row' spacing={1} alignItems='center' justifyContent='flex-end'>
                    <TextField value={exportLink} disabled sx={{ width:300 }}/>
                    <IconButton onClick={copyClipboard}>
                        <ContentCopyIcon/>
                    </IconButton>
                    <Fade in={visible === true} timeout={400}>
                        <Typography variant='caption' color='primary'>Copied to clipboard</Typography>
                    </Fade>
                </Stack>
                <Button variant='contained' size='large' onClick={exportArmy} endIcon={<FileUploadIcon/>} sx={{ borderRadius:'16px', backgroundColor:'buttons.main', '&:hover': { backgroundColor:'buttons.main', boxShadow: 5, } }}>Export</Button>
            </Stack>
        </>
    )
}