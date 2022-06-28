import React from 'react';
import { useState } from 'react';

import { 
    Stack,
    Slider,
    Avatar,
    Typography
} from '@mui/material';

import {
    TROOPS,
    SPELLS,
    MAXTROOPS,
    MAXSPELLS,
    MAXMACHINES,
    HIGHEST_TH
} from '../utils/data';

import {
    arrayOnlyProp
} from '../utils/functions';

function DisplayButtons({ myArray, currentCapacity }) {
    return (
        myArray.map((index) => (    
            <Stack direction='row' key={index[0]} spacing={3}>
                <Avatar src='../static/images/avatars/barbarian.svg' variant='rounded'/>
                <Typography sx={{ minWidth: 150 }}>{index[0]}</Typography>
                <Slider
                defaultValue={0}
                valueLabelDisplay="auto"
                min={0}
                max={Math.floor(currentCapacity/index[1])}
                sx={{ minWidth: 100 }}
                onChange={handleSwitch}
                />
            </Stack>
        ))
    )
}

const handleSwitch = (e) => {
    //setCurrentTroopsCapacity(currentTroopsCapacity - e.target.value);
};

export default function MainPage() {

    const [currentTownHall, setCurrentTownHall] = useState(HIGHEST_TH);
    const [currentTroopsCapacity, setCurrentTroopsCapacity] = useState(0);
    const [currentSpellsCapacity, setCurrentSpellsCapacity] = useState(0);
    const [currentMachinesCapacity, setCurrentMachinesCapacity] = useState(0);

    const handleSwitchTH = (e) => {
        setCurrentTownHall(e.target.value);
    };

    return (
        <>
            <Stack direction='row' spacing={5} sx={{ maxWidth: 500 }} pt={5} pl={5}>
                <Slider
                    defaultValue={HIGHEST_TH}
                    valueLabelDisplay="auto"
                    min={1}
                    max={HIGHEST_TH}
                    onChange={handleSwitchTH}
                    />
                <Typography>TH</Typography>
            </Stack>

            <Typography>Troops Capacity : {currentTroopsCapacity}/{MAXTROOPS[currentTownHall]}</Typography>
            {MAXSPELLS[currentTownHall] === 0 ? <Typography>&nbsp;</Typography> : <Typography>Spells Capacity : {currentSpellsCapacity}/{MAXSPELLS[currentTownHall]}</Typography>}
            {MAXMACHINES[currentTownHall] === 0 ? <Typography>&nbsp;</Typography> : <Typography>Siege Machines Capacity : {currentMachinesCapacity}/{MAXMACHINES[currentTownHall]}</Typography>}

            <Stack direction='row' spacing={5}>
                <Stack direction='column'>
                    <Typography>Troops</Typography>
                    <DisplayButtons myArray={arrayOnlyProp(TROOPS,currentTownHall)} currentCapacity={MAXTROOPS[currentTownHall]-currentTroopsCapacity}/>
                </Stack>
                <Stack direction='column'>
                    <Typography>Spells</Typography>
                    <DisplayButtons myArray={arrayOnlyProp(SPELLS,currentTownHall)} currentCapacity={MAXSPELLS[currentTownHall]-currentSpellsCapacity}/>
                </Stack>
            </Stack>
        </>
    )
}