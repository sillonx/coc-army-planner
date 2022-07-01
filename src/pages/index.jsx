//React imports
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
    Fade,
    Grid
} from '@mui/material';

//MUI Icons imports
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ClearIcon from '@mui/icons-material/Clear';

//Variables imports
import {
    TROOPS,
    SPELLS,
    MAX_TROOPS,
    MAX_SPELLS,
    MAX_BOOSTED,
    MAX_MACHINES,
    MAX_BARRACKS,
    MAX_DARK_BARRACKS,
    MAX_SPELL_FACTORY,
    MAX_DARK_SPELL_FACTORY,
    MAX_WORKSHOP,
    HIGHEST_TH
} from '../utils/data';

//Functions imports
import {
    arrayOnlyProp,
    divideArray,
    decodeLink,
    encodeLink
} from '../utils/functions';

//Images imports
import {
    troopsImages,
    spellsImages,
    townHallsImages,
    barracksImages,
    darkBarracksImages,
    spellFactoryImages,
    darkSpellFactoryImages,
    workshopImages
 } from '../utils/images';
import super_troops from '../static/images/others/super_troops.png';


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

    const clearAll = () => {
        setCurrentTroops(troopsTab);
        setCurrentSpells(spellsTab);
        setPreviousTroopsCapacity(initTroops);
        setPreviousSpellsCapacity(initSpells);
        setCurrentTroopsCapacity(0);
        setCurrentSpellsCapacity(0);
        setCurrentMachinesCapacity(0);
        setCurrentBoostedUnits(0);
    }

    function checkEmpty(myTab) {
        let n = 0;
        for (let i=0; i<myTab.length; i++) {
            n+=myTab[i][1];
        }
        if (n>0) {
            return 'textfield.secondary';
        }
        else {
            return 'text.primary';
        }
    }


    return (
        <>
            <Stack direction='column' pt={5} spacing={2} alignItems='center' justifyContent='center'>
                <TextField sx={{ width:300 }} value={importLink} placeholder='https://link.clashofclans.com/en?action=CopyArmy&army=' onChange={(e) => setImportLink(e.target.value)} color='textfield' focused={importLink !== ''}></TextField>
                <Button size='large' variant='contained' onClick={importArmy} endIcon={<FileDownloadIcon/>} sx={{ borderRadius:'16px', backgroundColor:'buttons.main', '&:hover': { backgroundColor:'buttons.main', boxShadow: 5 } }}>Import</Button>
            </Stack>

            <Stack direction='column' pt={5} spacing={2} alignItems='center' justifyContent='center'>
                <Avatar src={townHallsImages[currentTownHall-1]} variant='square' sx={{ width: 150, height: 150 }}/>
                <Typography variant='h6'>Troops Capacity : {currentTroopsCapacity}/{MAX_TROOPS[currentTownHall]}</Typography>
                {MAX_SPELLS[currentTownHall] === 0 ? <></> : <Typography variant='h6'>Spells Capacity : {currentSpellsCapacity}/{MAX_SPELLS[currentTownHall]}</Typography>}
                {MAX_BOOSTED[currentTownHall] === 0 ? <></> : <Typography variant='h6'>Boosted Units : {currentBoostedUnits}/{MAX_BOOSTED[currentTownHall]}</Typography>}
                {MAX_MACHINES[currentTownHall] === 0 ? <></> : <Typography variant='h6'>Siege Machines Capacity : {currentMachinesCapacity}/{MAX_MACHINES[currentTownHall]}</Typography>}
                <Slider value={currentTownHall} marks valueLabelDisplay='on' min={1} max={HIGHEST_TH} onChange={handleSlideTH} sx={{ paddingTop:10, width:350, color:'buttons.main' }}/>
                <Button size='large' variant='contained' onClick={clearAll} endIcon={<ClearIcon/>} sx={{ borderRadius:'16px', color:'common.black', backgroundColor:'buttons.secondary', '&:hover': { backgroundColor:'buttons.secondary', boxShadow: 5, color:'common.black' } }}>Clear All</Button>
            </Stack>

            <Stack direction='column' pt={5} spacing={4} alignItems='center' justifyContent='center'>
                <Grid container pt={2} direction='row' spacing={2} alignItems='flex-start' justifyContent='space-evenly'>
                    <Stack xs={12} sm={12} md={6} lg={6} xl={6} direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        <Stack direction='row' spacing={2} pb={2} alignItems='center' justifyContent='center'>
                            <Typography color={checkEmpty(divideArray(currentTroops,currentSpells)[0])} sx={{ fontSize: 18, fontWeight:'bold', textDecoration: 'underline' }}>TROOPS</Typography>
                            <Avatar src={barracksImages[MAX_BARRACKS[currentTownHall]-1]} variant='square' alt={'Barracks'} sx={{ width: 50, height: 50 }}/>
                        </Stack>
                        {arrayOnlyProp(pTroops,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={2} alignItems='center' justifyContent='center'>
                                <Avatar src={troopsImages[index[0]]} variant='square' alt={index[1]} sx={{ width: 66, height: 66 }}/>
                                <Typography variant='body1' sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentTroops[index[0]][1]}
                                sx={{ width: 80 }}
                                onChange={handleChangeTroop}
                                color='textfield'
                                focused={currentTroops[index[0]][1] !== 0 && currentTroops[index[0]][1] !== '0'}
                                />
                            </Stack>
                        ))}
                    </Stack>
                    <Stack xs={12} sm={12} md={6} lg={6} xl={6} direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        {currentTownHall >= 7 ? 
                        <Stack direction='row' spacing={2} pb={2} alignItems='center' justifyContent='center'>
                            <Typography color={checkEmpty(divideArray(currentTroops,currentSpells)[1])} sx={{ fontSize: 18, fontWeight:'bold', textDecoration: 'underline' }}>DARK TROOPS</Typography> 
                            <Avatar src={darkBarracksImages[MAX_DARK_BARRACKS[currentTownHall]-1]} variant='square' alt={'Dark Barracks'} sx={{ width: 50, height: 50 }}/>
                        </Stack>
                        : <></>}
                        {arrayOnlyProp(dTroops,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={2} alignItems='center' justifyContent='center'>
                                <Avatar src={troopsImages[index[0]]} variant='square' alt={index[1]} sx={{ width: 66, height: 66 }}/>
                                <Typography sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentTroops[index[0]][1]}
                                sx={{ maxWidth: 80 }}
                                onChange={handleChangeTroop}
                                color='textfield'
                                focused={currentTroops[index[0]][1] !== 0 && currentTroops[index[0]][1] !== '0'}
                                />
                            </Stack>
                        ))}
                    </Stack>
                </Grid>
                
                <Grid container pt={2} direction='row' spacing={2} alignItems='flex-start' justifyContent='space-evenly'>
                    <Stack xs={12} sm={12} md={6} lg={6} xl={6} direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        {currentTownHall >= 5 ?
                        <Stack direction='row' spacing={2} pb={2} alignItems='center' justifyContent='center'>
                            <Typography color={checkEmpty(divideArray(currentTroops,currentSpells)[2])} sx={{ fontSize: 18, fontWeight:'bold', textDecoration: 'underline' }}>SPELLS</Typography> 
                            <Avatar src={spellFactoryImages[MAX_SPELL_FACTORY[currentTownHall]-1]} variant='square' alt={'Spell Factory'} sx={{ width: 50, height: 50 }}/>
                        </Stack>
                        : <></>}
                        {arrayOnlyProp(pSpells,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={2} alignItems='center' justifyContent='center'>
                                <Avatar src={spellsImages[index[0]]} variant='square' alt={index[1]} sx={{ width: 66, height: 66 }}/>
                                <Typography sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentSpells[index[0]][1]}
                                sx={{ maxWidth: 80 }}
                                onChange={handleChangeSpell}
                                color='textfield'
                                focused={currentSpells[index[0]][1] !== 0 && currentSpells[index[0]][1] !== '0'}
                                />
                            </Stack>
                        ))}
                    </Stack>
                    <Stack xs={12} sm={12} md={6} lg={6} xl={6} direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        {currentTownHall >= 8 ?
                        <Stack direction='row' spacing={2} pb={2} alignItems='center' justifyContent='center'> 
                            <Typography color={checkEmpty(divideArray(currentTroops,currentSpells)[3])} sx={{ fontSize: 18, fontWeight:'bold', textDecoration: 'underline' }}>DARK SPELLS</Typography> 
                            <Avatar src={darkSpellFactoryImages[MAX_DARK_SPELL_FACTORY[currentTownHall]-1]} variant='square' alt={'Dark Spell Factory'} sx={{ width: 50, height: 50 }}/>
                        </Stack>
                        : <></>}
                        {arrayOnlyProp(dSpells,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={2} alignItems='center' justifyContent='center'>
                                <Avatar src={spellsImages[index[0]]} variant='square' alt={index[1]} sx={{ width: 66, height: 66 }}/>
                                <Typography sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentSpells[index[0]][1]}
                                sx={{ maxWidth: 80 }}
                                onChange={handleChangeSpell}
                                color='textfield'
                                focused={currentSpells[index[0]][1] !== 0 && currentSpells[index[0]][1] !== '0'}
                                />
                            </Stack>
                        ))}
                    </Stack>
                </Grid>
                
                <Grid container pt={2} direction='row' spacing={2} alignItems='flex-start' justifyContent='space-evenly'>
                    <Stack xs={12} sm={12} md={6} lg={6} xl={6} direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        {currentTownHall >= 11 ? 
                        <Stack direction='row' spacing={2} pb={2} alignItems='center' justifyContent='center'>
                            <Typography color={checkEmpty(divideArray(currentTroops,currentSpells)[4])} sx={{ fontSize: 18, fontWeight:'bold', textDecoration: 'underline' }}>SUPER TROOPS</Typography>
                            <Avatar src={super_troops} variant='square' alt={'Super Troops'} sx={{ width: 33, height: 33 }}/>
                        </Stack>
                        : <></>}
                        {arrayOnlyProp(sTroops,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={2} alignItems='center' justifyContent='center'>
                                <Avatar src={troopsImages[index[0]]} variant='square' alt={index[1]} sx={{ width: 66, height: 66 }}/>
                                <Typography sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentTroops[index[0]][1]}
                                sx={{ maxWidth: 80 }}
                                onChange={handleChangeSTroop}
                                color='textfield'
                                focused={currentTroops[index[0]][1] !== 0 && currentTroops[index[0]][1] !== '0'}
                                />
                            </Stack>
                        ))}
                    </Stack>
                    <Stack xs={12} sm={12} md={6} lg={6} xl={6} direction='column' spacing={1} alignItems='center' justifyContent='center'>
                        {currentTownHall >= 12 ? 
                        <Stack direction='row' spacing={2} pb={2} alignItems='center' justifyContent='center'>
                            <Typography color={checkEmpty(divideArray(currentTroops,currentSpells)[5])} sx={{ fontSize: 18, fontWeight:'bold', textDecoration: 'underline' }}>SIEGE MACHINES</Typography>
                            <Avatar src={workshopImages[MAX_WORKSHOP[currentTownHall]-1]} variant='square' alt={'Workshop'} sx={{ width: 50, height: 50 }}/>
                        </Stack>
                        : <></>}
                        {arrayOnlyProp(sMachines,currentTownHall).map((index) => (    
                            <Stack direction='row' key={index[0]} spacing={2} alignItems='center' justifyContent='center'>
                                <Avatar src={troopsImages[index[0]]} variant='square' alt={index[1]} sx={{ width: 66, height: 66 }}/>
                                <Typography sx={{ minWidth: 150, textAlign:'center' }}>{index[1]}</Typography>
                                <TextField
                                name={index[0].toString()}
                                type={'number'}
                                value={currentTroops[index[0]][1]}
                                sx={{ maxWidth: 80 }}
                                onChange={handleChangeMachine}
                                color='textfield'
                                focused={currentTroops[index[0]][1] !== 0 && currentTroops[index[0]][1] !== '0'}
                                />
                            </Stack>
                        ))}
                    </Stack>
                </Grid>
            </Stack>

            <Stack direction='column' pt={7} pb={5} spacing={2} alignItems='center' justifyContent='center'>
                <Stack pl={21} direction='row' spacing={1} alignItems='center' justifyContent='flex-end'>
                    <TextField value={exportLink} disabled={exportLink === ''} sx={{ width:300 }} color='textfield' focused={exportLink !== ''}/>
                    <IconButton onClick={copyClipboard}>
                        <ContentCopyIcon/>
                    </IconButton>
                    <Fade in={visible === true} timeout={400}>
                        <Typography variant='caption' sx={{ color:'textfield.secondary' }}>Copied to clipboard</Typography>
                    </Fade>
                </Stack>
                <Button variant='contained' size='large' onClick={exportArmy} endIcon={<FileUploadIcon/>} sx={{ borderRadius:'16px', backgroundColor:'buttons.main', '&:hover': { backgroundColor:'buttons.main', boxShadow: 5, } }}>Export</Button>
            </Stack>
        </>
    )
}