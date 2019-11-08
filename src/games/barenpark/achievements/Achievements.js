import {CardActions} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import React, {useState} from 'react'
import CardContent from '@material-ui/core/CardContent'
import Card from '../../../shared/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Checkbox from '../../../shared/Checkbox'
import FlexSpacer from '../../../shared/FlexSpacer'
import LabelValueDisplay from '../../../shared/LabelValueDisplay'
import achievementData from './achievementData'

function Achievements() {
    const [baseGame, setBaseGame] = useState(defaultState.baseGame)
    const [badNewsBears, setBadNewsBears] = useState(defaultState.badNewsBears)
    const [variety, setVariety] = useState(defaultState.variety)
    const [selected, setSelected] = useState(null)

    const handleReset = () => {
        setBaseGame(defaultState.baseGame)
        setBadNewsBears(defaultState.badNewsBears)
        setVariety(defaultState.variety)
        setSelected(null)
    }

    const handleRanzomize = () => {
        let picked = []
        let pool = [...achievementData]
            .filter(a => (baseGame && a.game === 'base') || (badNewsBears && a.game === 'badNewsBears'))

        while (picked.length < 3 && pool.length > 0) {
            // Randomly pick from the list
            const index = Math.floor(Math.random() * Math.floor(pool.length))
            const [pick] = pool.splice(index, 1)
            if (!variety || picked.every(a => a.type !== pick.type)) picked.push(pick)
        }
        setSelected(picked)
    }

    return (
        <Card>
            <CardHeader title="Achievement Selector"/>
            <CardContent>
                <LabelValueDisplay
                    dense
                    label='Options'
                    value={
                        <React.Fragment>
                            <Checkbox label="Base Game" checked={baseGame} onChange={setBaseGame}/>
                            <Checkbox label="Bad News Bears" checked={badNewsBears} onChange={setBadNewsBears}/>
                            <Checkbox label="Variety" checked={variety} onChange={setVariety}/>
                        </React.Fragment>
                    }
                />

                <LabelValueDisplay
                    label='Selected Achievements'
                    value={
                        <React.Fragment>
                            {
                                !selected &&
                                <Typography>Press <i>Randomize</i> below to randomly select achievements!</Typography>
                            }

                            {
                                selected &&
                                <React.Fragment>
                                    {selected.map((a, index) =>
                                        <LabelValueDisplay key={index} label={`Achievement ${index + 1}`}
                                                           value={a.name}/>
                                    )}

                                    <FlexSpacer size={16}/>

                                    <Typography variant='caption' color='textSecondary'>
                                        Don't forget to remove the lowest value achievement for 2 player games!
                                    </Typography>
                                </React.Fragment>
                            }
                        </React.Fragment>
                    }
                />
            </CardContent>
            <CardActions>
                <Button color="secondary" onClick={handleReset}>Reset</Button>
                <FlexSpacer/>
                <Button color="primary" disabled={!baseGame && !badNewsBears} onClick={handleRanzomize}>
                    Randomize
                </Button>
            </CardActions>
        </Card>
    )
}

const defaultState = {
    baseGame: true,
    badNewsBears: true,
    variety: true
}

export default Achievements
