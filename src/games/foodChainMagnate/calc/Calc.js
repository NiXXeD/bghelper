import React, {useState} from 'react'
import Card from '../../../shared/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import FormGroup from '@material-ui/core/FormGroup'
import Button from '@material-ui/core/Button'
import Checkbox from '../../../shared/Checkbox'
import Dropdown from '../../../shared/Dropdown'
import UnitPrices from './UnitPrices'
import Profit from './Profit'

function Calc() {
    const [bonusItemsSold, setBonusItemsSold] = useState(defaultState.bonusItemsSold)
    const [cfo, setCfo] = useState(defaultState.cfo)
    const [garden, setGarden] = useState(defaultState.garden)
    const [itemsSold, setItemsSold] = useState(defaultState.itemsSold)
    const [unitPrice, setUnitPrice] = useState(defaultState.unitPrice)

    const salesError = !garden && itemsSold > 3
    const bonusError = bonusItemsSold > itemsSold

    const salesDollars = unitPrice * itemsSold
    const bonusDollars = bonusItemsSold * 5
    const gardenMultiplier = garden ? 2 : 1
    const cfoMultiplier = cfo ? 1.5 : 1
    const profit = Math.ceil(((salesDollars * gardenMultiplier) + bonusDollars) * cfoMultiplier)

    const reset = () => {
        setBonusItemsSold(defaultState.bonusItemsSold)
        setCfo(defaultState.cfo)
        setGarden(defaultState.garden)
        setItemsSold(defaultState.itemsSold)
        setUnitPrice(defaultState.unitPrice)
    }

    return (
        <Card>
            <CardHeader title="Dinnertime Calculator"/>
            <CardContent>
                <FormGroup>
                    <UnitPrices
                        value={unitPrice}
                        onChange={setUnitPrice}
                    />

                    <Dropdown
                        label='Items Sold'
                        value={itemsSold}
                        onChange={setItemsSold}
                        items={itemsSoldMenuItems}
                        error={salesError}
                        errorText='Items sold must be at most 3 for regular house.'
                    />

                    <Dropdown
                        label='Marketing Bonuses'
                        value={bonusItemsSold}
                        onChange={setBonusItemsSold}
                        items={bonusSalesMenuItems}
                        error={bonusError}
                        errorText='Marketing bonuses may not exceed items sold.'
                    />

                    <Checkbox label="Garden House" checked={garden} onChange={setGarden}/>
                    <Checkbox label="CFO Bonus" checked={cfo} onChange={setCfo}/>
                </FormGroup>
            </CardContent>
            <CardActions>
                <Button color="secondary" onClick={reset}>Reset</Button>
                <Profit value={profit}/>
            </CardActions>
        </Card>
    )
}

const itemsSoldMenuItems = [1, 2, 3, 4, 5].map(value => ({label: `${value} item(s) sold`, value}))
const bonusSalesMenuItems = [0, 1, 2, 3, 4, 5].map(value => ({label: `${value} bonus(es)`, value}))

const defaultState = {
    bonusItemsSold: 0,
    cfo: false,
    garden: false,
    itemsSold: 1,
    unitPrice: 10
}

export default Calc
