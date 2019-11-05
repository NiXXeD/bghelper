import FormControlLabel from '@material-ui/core/FormControlLabel'
import React, {useEffect, useState} from 'react'
import Card from '../../../shared/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import Masonry from 'react-masonry-component'
import FlexRow from '../../../shared/FlexRow'
import FlexSpacer from '../../../shared/FlexSpacer'
import {originalMilestoneData, alternateMilestoneData} from './milestoneData'
import Milestone from './Milestone'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

function Milestones() {
    const getDataArray = (type = milestoneType) => {
        const data = type === 'original' ? originalMilestoneData : alternateMilestoneData
        return data.map(() => 'available')
    }

    const [{milestones, milestoneType}, setMilestones] = useState(() => {
        try {
            const oldStorageData = localStorage.getItem(localStorageKey)
            const parsedData = JSON.parse(oldStorageData)
            if (parsedData && parsedData.milestones && parsedData.milestoneType) {
                return parsedData
            }
        } catch (ex) {
            console.warn('Error loading local storage data: ', ex)
            localStorage.removeItem(localStorageKey)
        }
        return {
            milestones: getDataArray('original'),
            milestoneType: 'original'
        }
    })

    useEffect(() => {
        const data = JSON.stringify({milestones, milestoneType})
        localStorage.setItem(localStorageKey, data)
    }, [milestones, milestoneType])

    const reset = () => {
        const newMilestones = getDataArray()
        setMilestones({milestones: newMilestones, milestoneType})

        const newValue = JSON.stringify({
            milestones: newMilestones,
            milestoneType
        })
        localStorage.setItem(localStorageKey, newValue)
    }

    const updateMilestones = (index, value) => {
        const newMilestones = [...milestones]
        newMilestones[index] = value
        setMilestones({milestones: newMilestones, milestoneType})
    }

    const handleMilestoneSetChange = event => {
        const newType = event.target.value
        if (newType !== milestoneType) {
            // set defaults
            setMilestones({
                milestones: getDataArray(newType),
                milestoneType: newType
            })
        }
    }

    const milestoneData = milestoneType === 'original' ? originalMilestoneData : alternateMilestoneData
    return (
        <Card width='auto' maxWidth={900}>
            <CardHeader title="Milestone Tracker"/>
            <CardContent>
                <Masonry>
                    {milestones.map((value, key) =>
                        <Milestone
                            key={key}
                            index={key}
                            milestone={milestoneData[key]}
                            value={value}
                            onChange={updateMilestones}
                        />
                    )}
                </Masonry>
            </CardContent>
            <CardActions>
                <Button color="secondary" onClick={reset}>Reset</Button>

                <FlexSpacer/>

                <RadioGroup
                    name="milestoneType"
                    value={milestoneType}
                    onChange={handleMilestoneSetChange}
                >
                    <FlexRow>
                        <FormControlLabel
                            value="original"
                            control={<Radio/>}
                            label="Original"
                        />
                        <FormControlLabel
                            value="alternate"
                            control={<Radio/>}
                            label="Alternate"
                        />
                    </FlexRow>
                </RadioGroup>
            </CardActions>
        </Card>
    )
}

export const localStorageKey = 'milestones'

export default Milestones
