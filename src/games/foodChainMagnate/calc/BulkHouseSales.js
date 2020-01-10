import React, {useState} from 'react'
import Card from '../../../shared/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import FormGroup from '@material-ui/core/FormGroup'
import Button from '@material-ui/core/Button'
import TextField from '../../../shared/TextField'
import Checkbox from '../../../shared/Checkbox'
import UnitPrices from './UnitPrices'
import Profit from './Profit'

function BulkHouseSales({modules}) {
    const [unitPrice, setUnitPrice] = useState(defaultState.unitPrice)
    const [normalSales, setNormalSales] = useState(defaultState.normalSales)
    const [gardenOrParkSales, setGardenOrParkSales] = useState(defaultState.gardenOrParkSales)
    const [gardenAndParkSales, setGardenAndParkSales] = useState(defaultState.gardenAndParkSales)
    const [marketingBonuses, setMarketingBonuses] = useState(defaultState.marketingBonuses)
    const [frySales, setFrySales] = useState(defaultState.frySales)
    const [cfo, setCfo] = useState(defaultState.cfo)

    const cfoMultiplier = cfo ? 1.5 : 1
    const normalProfit = normalSales * unitPrice
    const gardenOrParkProfit = gardenOrParkSales * unitPrice * 2
    const gardenAndParkProfit = gardenAndParkSales * unitPrice * 3
    const fryProfit = frySales * 10
    const marketingProfit = (marketingBonuses * 5)
    const profit = Math.ceil(cfoMultiplier * (normalProfit + gardenOrParkProfit + gardenAndParkProfit + marketingProfit + fryProfit))

    const reset = () => {
        setUnitPrice(defaultState.unitPrice)
        setNormalSales(defaultState.normalSales)
        setGardenOrParkSales(defaultState.gardenOrParkSales)
        setGardenAndParkSales(defaultState.gardenAndParkSales)
        setMarketingBonuses(defaultState.marketingBonuses)
        setFrySales(defaultState.frySales)
        setCfo(defaultState.cfo)
    }

    return (
        <Card width='auto' maxWidth={375}>
            <CardHeader title='Bulk Sale Calculator'/>
            <CardContent>
                <FormGroup>
                    <UnitPrices value={unitPrice} onChange={setUnitPrice}/>

                    <TextField
                        type='number'
                        label='Normal Sales'
                        value={normalSales}
                        onChange={setNormalSales}
                        helperText='Regular demand, Coffee, Kimchi, Sushi, and/or Noodles.'
                    />

                    <TextField
                        type='number'
                        label='Either Garden or Park Sales'
                        value={gardenOrParkSales}
                        onChange={setGardenOrParkSales}
                        helperText='Items sold on either Garden or Park (not both).'
                    />

                    {
                        modules.lobbyists &&
                        <TextField
                            type='number'
                            label='Both Garden and Park Sales'
                            value={gardenAndParkSales}
                            onChange={setGardenAndParkSales}
                            helperText='Items sold on both Garden and Park.'
                        />
                    }
                    <TextField
                        type='number'
                        label='Marketing Bonuses'
                        value={marketingBonuses}
                        onChange={setMarketingBonuses}
                        helperText='Bonuses from first sale milestones.'
                    />

                    {
                        modules.fryChefs &&
                        <TextField
                            type='number'
                            label='Fry Sales'
                            value={frySales}
                            onChange={setFrySales}
                            helperText='Number of fries sold.'
                        />
                    }
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

const defaultState = {
    unitPrice: 10,
    normalSales: 0,
    gardenOrParkSales: 0,
    gardenAndParkSales: 0,
    frySales: 0,
    marketingBonuses: 0,
    cfo: false
}

export default BulkHouseSales
