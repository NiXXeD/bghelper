import Button from '@material-ui/core/Button'
import React, {useMemo, useState} from 'react'
import {CardActions, CardHeader} from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import Card from '../../../shared/Card'
import FlexCol from '../../../shared/FlexCol'
import FlexRow from '../../../shared/FlexRow'
import FlexSpacer from '../../../shared/FlexSpacer'
import LabelValueDisplay from '../../../shared/LabelValueDisplay'
import sample from '../../../shared/sample'
import data from './data'

function BuildATyrant() {
    const [increment, setIncrement] = useState(0)
    const {hp, ini, att, def, types, baddies} = useMemo(() => {
        const onePool = [...data.one]
        const fivePool = [...data.five]
        const picked = [sample(onePool), sample(onePool), sample(fivePool), sample(fivePool)]
        return picked.reduce((acc, val) => {
            acc.hp = Math.max(acc.hp, val.hp)
            acc.ini = Math.max(acc.ini, val.ini)
            acc.att = Math.max(acc.att, val.att)
            acc.def = Math.max(acc.def, val.def)
            acc.types = [...acc.types, ...val.types.filter(a => !acc.types.includes(a))]
            acc.baddies = [...acc.baddies, val.name]
            return acc
        }, {hp: 0, ini: 0, att: 0, def: 0, types: [], baddies: [], increment})
    }, [increment])

    return (
        <Card width={275}>
            <CardHeader title="Build A Tyrant Splicer"/>
            <CardContent>
                <FlexRow>
                    <FlexCol width={140}>
                        <LabelValueDisplay label='HP' value={hp}/>
                    </FlexCol>
                    <FlexCol width={140}>
                        <LabelValueDisplay label='Attack' value={att}/>
                    </FlexCol>
                </FlexRow>

                <FlexRow>
                    <FlexCol width={140}>
                        <LabelValueDisplay label='Initiative' value={ini}/>
                    </FlexCol>
                    <FlexCol width={140}>
                        <LabelValueDisplay label='Defense' value={def}/>
                    </FlexCol>
                </FlexRow>

                <LabelValueDisplay label='Baddie Types' value={
                    types.map(type => <FlexRow>{type}</FlexRow>)
                }/>

                <LabelValueDisplay label='Baddies Used' value={
                    baddies.map(name => <FlexRow>{name}</FlexRow>)
                }/>
            </CardContent>
            <CardActions>
                <FlexSpacer/>
                <Button color="primary" onClick={() => setIncrement(increment + 1)}>
                    Randomize
                </Button>
            </CardActions>
        </Card>
    )
}

export default BuildATyrant
