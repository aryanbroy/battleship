const shipsDiv = document.querySelector(".ships");
const gameBoard = document.querySelector(".grid-container");

const gameArray = Array.from(gameBoard.children);
let i = 1;
gameArray.forEach((item) => {
    item.id = i;
    i++;
})

const shipsArray = Array.from(shipsDiv.children)


class ship{
    constructor(name, length) {
        this.name = name;
        this.length = length;
    }
}

const carrier = new ship('carrier', 5);
const battleship = new ship('battleship', 4);
const cruiser = new ship('cruiser', 3);
const submariner = new ship('submarine', 3);
const destroyer = new ship('destroyer', 2);

//helps in placing the ship
// let placeDiv = (x_pos, y_pos) => {
//     var d = document.getElementById('carrier');
//     d.style.position = "absolute";
//     d.style.left = x_pos+'px';
//     d.style.top = y_pos+'px';
// }
// placeDiv(0+1, 0 + 1)
// placeDiv(40 + 2, 40 + 2);
// placeDiv(80+3, 80 + 3);



var gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.target.classList.add('selected')
            // placeDiv(1, 83);
            let column = getPosition(e.target).column;
            let row = getPosition(e.target).row;
            console.log(column);
            console.log(row);
        });
    });

function getPosition(element) {
    var index = Array.from(element.parentElement.children).indexOf(element);
        
    var column = index % 3 + 1; // Assuming 3 columns
    var row = Math.floor(index / 3) + 1;

    return { column, row };
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function addShip(length) {
    let randomIndex = Math.floor(Math.random() * 100) + 1;
    let tf = [true, false];
    let randomBoolean = Math.floor(Math.random() * 2);
    let idArr = [];
    let horizontal = tf[randomBoolean];
    console.log(horizontal);
    let temp = (Math.floor((randomIndex / 10) % 10) * 10) + 10;
    if (horizontal) {
        if (randomIndex >= 100 - length || randomIndex >= 90 - length || randomIndex >= 80 - length || randomIndex >= 70 - length || randomIndex >= 60 - length || randomIndex >= 50 - length || randomIndex >= 40 - length || randomIndex >= 30 - length || randomIndex >= 20 - length || randomIndex >= 10 - length) { // need to find some logic here
            randomIndex = temp - length;
        }
    }
    else {
        if (length === 2 && randomIndex > 90) {
            randomIndex = randomIndex-10;
        }
        if (length === 3 && randomIndex > 80) {
            randomIndex = randomIndex-20;
        }
        if (length === 4 && randomIndex > 70) {
            randomIndex = randomIndex-30;
        }
        if (length === 5 && randomIndex > 60) {
            randomIndex = randomIndex-40;
        }
    }
    for (let i = 0; i < length; i++){
        if (horizontal === true) {
            const findId = document.getElementById(`${randomIndex + i}`);
            findId.classList.add('selected')
            idArr.push(findId)
        }
        else {
            const findId = document.getElementById(`${randomIndex + (i * 10)}`);
            findId.classList.add('selected')
            idArr.push(findId);
        }
    }
    idArr.forEach(e => {
        console.log(e);
    })
}

addShip(cruiser.length);
// addShip(carrier.length);
