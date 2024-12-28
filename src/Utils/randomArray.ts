export function randomArray() {

    const size = 3

    const piecesQtty = size * size
    const array = Array.from({length: piecesQtty},( _ , idx) => idx +1)

    for (let i = array.length - 1; i > 0; i--) {
        const randomNumber = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
    }


    return {size, array}

}