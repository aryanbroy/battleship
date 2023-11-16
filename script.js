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


let ship = (length) => {
    let shipLength = length;
    let hitCount = 0;

    let hit = () => {
        hitCount++;
    }

    let isSunk = () => {
        if (hitCount === shipLength) {
            return true;
        }
        else {
            return false;
        }
    }
    return {shipLength, hitCount ,hit, isSunk}
}

let placeDiv = (x_pos, y_pos) => {
    var d = document.getElementById('carrier');
    d.style.position = "absolute";
    d.style.left = x_pos+'px';
    d.style.top = y_pos+'px';
}

placeDiv(1, 83);

var gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(function(item) {
        item.addEventListener('click', function() {
            getPosition(item);
        });
    });

    function getPosition(element) {
        var index = Array.from(element.parentElement.children).indexOf(element);
        
        var column = index % 3 + 1; // Assuming 3 columns
        var row = Math.floor(index / 3) + 1;

        alert("Row: " + row + ", Column: " + column);
    }

