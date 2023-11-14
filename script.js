function ship() {
    
    let ships =  {
        carrier : {
            'length': 5,
            'hit': 0
        },
        battleship : {
            'length': 4,
            'hit': 0
        },
        cruiser : {
            'length': 3,
            'hit': 0
        },
        submarine : {
            'length': 3,
            'hit': 0
        },
        destroyer : {
            'length': 2,
            'hit' : 0
        }
    };
    return ships;
}

console.log(ship())

function hit(shipName) {
    shipName.hit++;
}

function isSunk(shipName) {
    if (shipName.hit === 17) {
        return true;
    }
    else {
        return false;
    }
}