import React from 'react';
import { useState } from 'react';

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

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import {
    TROOPS,
    SPELLS,
    MAX_TROOPS,
    MAX_SPELLS,
    MAX_BOOSTED,
    MAX_MACHINES,
    HIGHEST_TH
} from '../utils/data';

import {
    arrayOnlyProp,
    divideArray,
    decodeLink,
    encodeLink
} from '../utils/functions';

import barbarian from '../static/images/troops/barbarian.png';
import archer from '../static/images/troops/archer.png';
//https://clashofclans.fandom.com/wiki/Army
import th11 from '../static/images/townhalls/th11.png';
import th12 from '../static/images/townhalls/th12.png';
import th13 from '../static/images/townhalls/th13.png';
import th14 from '../static/images/townhalls/th14.png';
//https://clashofclans.fandom.com/wiki/Town_Hall

var troopsImages = [
    barbarian,
    archer
];

var spellsImages = [

]

var machinesImages = [

]

var townHallsImages = [
    th14,
    th14,
    th14,
    th14,
    th14,
    th14,
    th14,
    th14,
    th14,
    th14,
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
                <Avatar src={townHallsImages[currentTownHall-1]} variant='square' sx={{ width: 120, height: 130 }}/>
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
                                <Avatar src={troopsImages[index[0]]} variant='square'/>
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
                                <Avatar src={troopsImages[index[0]]} variant='square'/>
                                <Typography sx={{ minWidth: 150 }}>{index[1]}</Typography>
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
                                <Avatar src={spellsImages[index[0]]} variant='square'/>
                                <Typography sx={{ minWidth: 150 }}>{index[1]}</Typography>
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
                                <Avatar src={spellsImages[index[0]]} variant='square'/>
                                <Typography sx={{ minWidth: 150 }}>{index[1]}</Typography>
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
                                <Avatar src={troopsImages[index[0]]} variant='square'/>
                                <Typography sx={{ minWidth: 150 }}>{index[1]}</Typography>
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
                                <Avatar src={machinesImages[index[0]]} variant='square'/>
                                <Typography sx={{ minWidth: 150 }}>{index[1]}</Typography>
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