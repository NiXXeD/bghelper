export default {
    base: [
        {color: '#BDB6B3', title: 'to pay $20 or more in salaries', text: 'May use multiple trainers on the same person.'},
        {color: '#BDB6B3', title: 'to train someone', text: '$15 discount on salaries.'},
        {color: '#AF95C2', title: 'to hire 3 people in 1 turn', text: '+2 Management Trainees.'},
        {color: '#AF95C2', title: 'to throw away drink/food', text: 'Get a freezer that stores 10 items.'},
        {color: '#AF95C2', title: 'waitress played', text: 'Each waitress +$2.'},
        {color: '#AF95C2', title: 'to have $20', text: 'May see bank reserve cards.'},
        {color: '#AF95C2', title: 'to have $100', text: 'Your CEO counts as CFO (+50% to cash earned). May not have CFO.'},
        {color: '#95A968', title: 'burger produced', text: '+1 Burger Cook.'},
        {color: '#95A968', title: 'pizza produced', text: '+1 Pizza Cook.'},
        {color: '#98C2C9', title: 'billboard placed', text: 'No salaries for marketeers; Eternal marketing.'},
        {color: '#98C2C9', title: 'burger marketed', text: '+$5 for every burger sold.'},
        {color: '#98C2C9', title: 'pizza marketed', text: '+$5 for every pizza sold.'},
        {color: '#98C2C9', title: 'drink marketed', text: '+$5 for every drink sold.'},
        {color: '#98C2C9', title: 'airplane campaign', text: 'Count +2 open slots when determining order of play.'},
        {color: '#98C2C9', title: 'radio campaign', text: 'Your radios market 2 goods per turn instead of 1.'},
        {color: '#A9CB94', title: 'Errand Boy played', text: 'All buyers get +1 drink from each source.'},
        {color: '#A9CB94', title: 'Cart Operator played', text: 'Buyers get range +1.'},
        {color: '#EAA791', title: 'to lower prices', text: 'Price -$1.'}
    ],
    hardChoices: [
        {color: '#AF95C2', title: 'to hire 3 people in 1 turn', text: '+2 Management Trainees.', maxRound: 3},
        {color: '#BDB6B3', title: 'to train someone', text: '$15 discount on salaries.'},
        {color: '#98C2C9', title: 'billboard placed', text: 'No salaries for marketeers; Eternal marketing.'},
        {color: '#AF95C2', title: 'to throw away drink/food', text: 'Get a freezer that stores 10 items.'},
        {color: '#95A968', title: 'burger produced', text: '+1 Burger Cook.'},
        {color: '#98C2C9', title: 'burger marketed', text: '+$5 for every burger sold.', maxRound: 2},
        {color: '#AF95C2', title: 'waitress played', text: 'Each waitress +$2.'},
        {color: '#95A968', title: 'pizza produced', text: '+1 Pizza Cook.'},
        {color: '#98C2C9', title: 'pizza marketed', text: '+$5 for every pizza sold.', maxRound: 2},
        {color: '#AF95C2', title: 'to have $20', text: 'May see bank reserve cards.'},
        {color: '#A9CB94', title: 'Errand Boy played', text: 'All buyers get +1 drink from each source.'},
        {color: '#98C2C9', title: 'drink marketed', text: '+$5 for every drink sold.', maxRound: 2},
        {color: '#AF95C2', title: 'to have $100', text: 'Your CEO counts as CFO (+50% to cash earned). May not have CFO.'},
        {color: '#A9CB94', title: 'Cart Operator played', text: 'Buyers get range +1.'},
        {color: '#98C2C9', title: 'airplane campaign', text: 'Count +2 open slots when determining order of play.'},
        {color: '#EAA791', title: 'to lower prices', text: 'Price -$1.'},
        {color: '#BDB6B3', title: 'to pay $20 or more in salaries', text: 'May use multiple trainers on the same person.'},
        {color: '#98C2C9', title: 'radio campaign', text: 'Your radios market 2 goods per turn instead of 1.'}
    ],
    newMilestones: [
        {color: '#98C2C9', title: 'marketeer used', text: '$5 for every good your marketeers market; Distance -2.', maxRound: 2},
        {color: '#98C2C9', title: 'marketing trainee used', text: '+1 Kitchen Trainee and +1 Errand Boy.'},
        {color: '#98C2C9', title: 'campaign manager used', text: 'This turn, may place 1 marketing tile with same type, duration and range.'},
        {color: '#98C2C9', title: 'brand manager used', text: 'This turn, may place 2 different goods on 1 plane.'},
        {color: '#98C2C9', title: 'brand director used', text: 'Your radio is permanent.'},
        {color: '#95A968', title: 'burger sold', text: 'Your CEO always has 4 slots (regardless of reserve cards).'},
        {color: '#95A968', title: 'pizza sold', text: 'Place radio (pizza, 2 turns) on tile of each house that bought pizza.'},
        {color: '#A9CB94', title: 'lemonade sold', text: 'Any employee can be trained on the job, preserving color.'},
        {color: '#A9CB94', title: 'beer sold', text: 'May pay salary with food or drink.'},
        {color: '#A9CB94', title: 'coke sold', text: 'Get a freezer that stores 10 items.'},
        {color: '#A9CB94', title: 'cart operator used', text: 'Double amount of drinks hauled by cart/truck/zeppelin.'},
        {color: '#BDB6B3', title: 'recruiting girl used', text: 'Get a free executive vice president; Pay no salary for him.', maxRound: 2},
        {color: '#BDB6B3', title: 'trainer used', text: '+1 trainer; No longer need to fire employees if broke.', maxRound: 2},
        {color: '#EAA791', title: 'discount manager used', text: 'Remove $100 from the bank each round you discount by $3 or more..'},
        {color: '#AF95C2', title: 'house built', text: 'May use multiple trainers on the same person.'},
        {color: '#AF95C2', title: 'waitress used', text: 'Your salaries are $3 each.'},
        {color: '#cc0000', title: 'new restaurant', text: 'Place a permanent mailbox in restaurant area.'}
    ],
    ketchup: [
        {color: '#222222', fontColor: '#FFFFFF', title: 'demand fulfulled by someone else', text: 'Distance -1.'}
    ],
    lobbyists: [
        {color: '#AF95C2', title: 'lobbyist used', text: 'Add 1 tile to the city.'}
    ],
    coffee: [
        {color: '#8AC3A0', title: 'coffee sold', text: 'Build one coffee shop in the next clean up phase.'}
    ],
    ruralMarketers: [
        {color: '#98C2C9', title: 'rural marketer used', text: 'Place highway offramp.'}
    ]
}
