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

function SingleHouseSales({modules}) {
    const [bonusItemsSold, setBonusItemsSold] = useState(defaultState.bonusItemsSold)
    const [cfo, setCfo] = useState(defaultState.cfo)
    const [garden, setGarden] = useState(defaultState.garden)
    const [park, setPark] = useState(defaultState.park)
    const [itemsSold, setItemsSold] = useState(defaultState.itemsSold)
    const [specialItemsSold, setSpecialItemsSold] = useState(defaultState.specialItemsSold)
    const [friesSold, setFriesSold] = useState(defaultState.friesSold)
    const [unitPrice, setUnitPrice] = useState(defaultState.unitPrice)

    const salesError = !garden && itemsSold > 3
    const bonusError = bonusItemsSold > itemsSold

    const salesDollars = unitPrice * itemsSold
    const bonusDollars = bonusItemsSold * 5
    const bonusMultiplier = 1 + (garden ? 1 : 0) + (park ? 1 : 0)
    const cfoMultiplier = cfo ? 1.5 : 1
    const profit = Math.ceil(((salesDollars * bonusMultiplier) + bonusDollars) * cfoMultiplier)

    const reset = () => {
        setBonusItemsSold(defaultState.bonusItemsSold)
        setCfo(defaultState.cfo)
        setGarden(defaultState.garden)
        setPark(defaultState.park)
        setItemsSold(defaultState.itemsSold)
        setSpecialItemsSold(defaultState.specialItemsSold)
        setFriesSold(defaultState.friesSold)
        setUnitPrice(defaultState.unitPrice)
    }

    return (
        <Card>
            <CardHeader title='Single Sale Calculator'/>
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
                        helperText='Regular demand items sold.'
                    />

                    <Dropdown
                        label='Marketing Bonuses'
                        value={bonusItemsSold}
                        onChange={setBonusItemsSold}
                        items={bonusSalesMenuItems}
                        error={bonusError}
                        errorText='Marketing bonuses may not exceed items sold.'
                        helperText='Bonuses from first sale milestones.'
                    />

                    {
                        (modules.coffee || modules.kimchi || modules.sushi || modules.noodles) &&
                        <Dropdown
                            label='Special Items Sold'
                            value={specialItemsSold}
                            onChange={setSpecialItemsSold}
                            items={itemsSoldMenuItems}
                            helperText='Includes Coffee, Kimchi, Sushi, and Noodles.'
                        />
                    }

                    {
                        modules.fryChefs &&
                        <Dropdown
                            label='Fries Sold'
                            value={friesSold}
                            onChange={setFriesSold}
                            items={itemsSoldMenuItems}
                            helperText='Includes Coffee, Kimchi, Sushi, and Noodles.'
                        />
                    }
                    <Checkbox label='Garden House' checked={garden} onChange={setGarden}/>
                    {modules.lobbyists && <Checkbox label='Park Bonus' checked={park} onChange={setPark}/>}
                    <Checkbox label='CFO Bonus' checked={cfo} onChange={setCfo}/>
                </FormGroup>
            </CardContent>
            <CardActions>
                <Button color='secondary' onClick={reset}>Reset</Button>
                <Profit value={profit}/>
            </CardActions>
        </Card>
    )
}

const itemsSoldMenuItems = [...new Array(26)].map((_, value) => ({label: `${value} item(s) sold`, value}))
const bonusSalesMenuItems = [...new Array(26)].map((_, value) => ({label: `${value} bonus(es)`, value}))

const defaultState = {
    bonusItemsSold: 0,
    cfo: false,
    garden: false,
    park: false,
    itemsSold: 1,
    coffeeSold: 0,
    specialItemsSold: 0,
    friesSold: 0,
    unitPrice: 10
}

export default SingleHouseSales
