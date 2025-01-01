import { swapPieces } from "./swapPieces"

const playMock =  jest.fn()
global.Audio = jest.fn(()=>({
    play: playMock
})) as jest.Mock

const movements = [1,2,3,4]
const newPieceIdx = 2
const oldPieceIdx = 3
const setMovements = jest.fn()

it("should play a sound when its called", ()=>{
    swapPieces({movements,newPieceIdx,oldPieceIdx,setMovements})

    expect(playMock).toHaveBeenCalledTimes(1)
})


it("should swap pieces", ()=>{
    swapPieces({movements,newPieceIdx,oldPieceIdx,setMovements})
    expect(setMovements).toHaveBeenCalledWith([1,2,4,3])

})