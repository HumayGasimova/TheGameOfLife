export const commaSeparator = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const getRandomCoordianteX = (radius) => {
    return  Math.random()* (window.innerWidth - radius * 2) + radius;
} 

export const getRandomCoordianteY = (radius) => {
    return  Math.random()* ((window.innerHeight - 35) - radius * 2) + radius;
} 

export const getRandomVelocity = () => {
    return  (Math.random() - 0.5) * 50;
} 

export const getRandomRadius = () => {
    return  (Math.random() * 99) + 1;
} 

export const getArrayOfCells = (val) => {
    let array = new Array(val).fill(0);
    // array.map((el,i) => array[i] = i+1)
    return array;
} 

export const getRandomColor = () => {
    return  Math.random() * 255;
} 

export const getRandomAlfa = () => {
    return  Math.random();
} 

export const getUpdatedArrayOfCellsTopLine = (array, i) => {
    let arrayOfCells = array;
    let arrayOfLiveCells = [];
    let cell;
    if(arrayOfCells[i - 1].alive === true){
        arrayOfLiveCells.push(1)
    }
    if(arrayOfCells[i + 1].alive === true){
        arrayOfLiveCells.push(1)
    }
    if(arrayOfCells[i + 211].alive === true){
        arrayOfLiveCells.push(1)
    }
    if(arrayOfCells[i + 212].alive === true){
        arrayOfLiveCells.push(1)
    }
    if(arrayOfCells[i + 213].alive === true){
        arrayOfLiveCells.push(1)
    }
    if(arrayOfCells[i].alive === true){
        if(arrayOfLiveCells.length === 1 || arrayOfLiveCells.length === 4 || array.length === 5){
            cell = {...arrayOfCells[i], alive: false}
            arrayOfCells.splice(i,1,cell)
        }
    }

    if(arrayOfCells[i].alive === false && arrayOfLiveCells.length === 3){
        cell = {...arrayOfCells[i], alive: true}
        arrayOfCells.splice(i,1,cell)
    }
    
    return  arrayOfCells;
} 

export const getUpdatedArrayOfCellsBottomLine = (array, i) => {
    let arrayOfCells = array;
    let arrayOfLiveCells = [];
    if(arrayOfCells[i - 1].alive === true){
        arrayOfLiveCells.push(1)
    }
    if(arrayOfCells[i + 1].alive === true){
        arrayOfLiveCells.push(1)
    }
    if(arrayOfCells[i - 211].alive === true){
        arrayOfLiveCells.push(1)
    }
    if(arrayOfCells[i - 212].alive === true){
        arrayOfLiveCells.push(1)
    }
    if(arrayOfCells[i - 213].alive === true){
        arrayOfLiveCells.push(1)
    }
    if(arrayOfCells[i].alive === true){
        if(arrayOfLiveCells.length === 1 || arrayOfLiveCells.length === 4 || array.length === 5){
            arrayOfCells[i].alive = false
        }
    }

    if(arrayOfCells[i].alive === false){
        if(arrayOfLiveCells.length === 3){
            arrayOfCells[i].alive = true
        }
    }

    // arrayOfCells.splice(i,1,arrayOfCells[i])
    
    return  arrayOfCells;
} 
