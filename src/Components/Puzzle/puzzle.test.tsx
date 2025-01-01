import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen } from "@testing-library/react";
import { Puzzle } from './Puzzle';
import { swapPieces } from './swapPieces/swapPieces';
import { handleDragOver } from './handleDragOver/handleDragOver';
import { handleKeyDown } from './handleKeyDown/handleKeyDown';
import { selectPiece } from './selectPiece/selectPiece';

jest.mock('./swapPieces/swapPieces')
jest.mock('./handleDragOver/handleDragOver')
jest.mock('./handleKeyDown/handleKeyDown')
jest.mock( './selectPiece/selectPiece')

const movements =  [
    1,2,
    3,4
]

const setMovements =  jest.fn()


it("should render a puzzle", ()=>{
    render(<Puzzle movements={movements} setMovements={setMovements} size={2}/>)

    const allNormalPieces = screen.getAllByRole("application", {name: /^Piece ([1-4]), position ([1-4]) of 4$/})
    const emptyPiece = screen.getByRole("application", {name: "Empty space, you can put a nearby piece here."})

    expect(allNormalPieces).toHaveLength(3)
    expect(emptyPiece).toBeInTheDocument()
    expect(emptyPiece).toHaveTextContent("")
})

test("movable pieces should have draggable attribute", ()=>{
    render(<Puzzle movements={movements} setMovements={setMovements} size={2}/>)

    const firtsPiece = screen.getByRole("application",{name: "Piece 1, position 1 of 4"})
    const secondPiece = screen.getByRole("application",{name: "Piece 2, position 2 of 4"})
    const thirdPiece = screen.getByRole("application",{name: "Piece 3, position 3 of 4"})

    const emptyPiece = screen.getByRole("application",{name: "Empty space, you can put a nearby piece here."})

    expect(firtsPiece).toHaveAttribute("draggable", "false")

    expect(secondPiece).toHaveAttribute("draggable", "true")
    expect(thirdPiece).toHaveAttribute("draggable", "true")
    expect(emptyPiece).toHaveAttribute("draggable", "true")


})

describe("clicking piece", ()=>{
    it("should call swapPieces when clicking a movable piece",async ()=>{
        const user = userEvent.setup()

        render(<Puzzle movements={movements} setMovements={setMovements}  size={2}/>)
        
        const movablePiece = screen.getByRole("application",{name: "Piece 2, position 2 of 4"})
        await user.click(movablePiece)
        expect(swapPieces).toHaveBeenCalled()
    
        const newMovablePiece = screen.getByRole("application",{name: "Piece 1, position 1 of 4"})
        await user.click(newMovablePiece)
        expect(swapPieces).toHaveBeenCalled()
    
    })
    
    it("shouldnt call swapPieces when clicking a non movable piece",  async ()=>{
        const user = userEvent.setup()

        render(<Puzzle movements={movements} setMovements={setMovements}  size={2}/>)
    
        const nonMovablePiece = screen.getByRole("application", {name: "Piece 1, position 1 of 4"})
    
        await user.click(nonMovablePiece)
    
        expect(swapPieces).not.toHaveBeenCalled()
    })
    
    it("shouldnt call swapPieces when clicking on empty piece", async ()=>{
        const user = userEvent.setup()

        render(<Puzzle movements={movements} setMovements={setMovements}  size={2}/>)
    
        const emptyPiece = screen.getByRole("application", {name: "Empty space, you can put a nearby piece here."})
    
        await user.click(emptyPiece)
    
        expect(swapPieces).not.toHaveBeenCalled()
    })
})

describe("call functions", ()=>{
    it("should call handleDragOver", ()=>{

        render(<Puzzle movements={movements} setMovements={setMovements}  size={2}/>)
        const movablePiece = screen.getByRole("application", {name: "Piece 2, position 2 of 4"})
    
        fireEvent.dragOver(movablePiece)
    
        expect(handleDragOver).toHaveBeenCalled()
    
    
    })
    
    it("should call handleKeyDown", async ()=>{
        render(<Puzzle movements={movements} setMovements={setMovements}  size={2}/>)
    
        const user = userEvent.setup()
        const anyPiece = screen.getByRole("application",{name: "Piece 1, position 1 of 4"})
    
        anyPiece.focus()
        await user.keyboard("{ArrowLeft}")
    
        expect(handleKeyDown).toHaveBeenCalled()
    
    })

    it("should call selectPiece", ()=>{
        render(<Puzzle movements={movements} setMovements={setMovements}  size={2}/>)
        const anyPiece = screen.getByRole("application",{name: "Piece 1, position 1 of 4"})

        fireEvent.dragStart(anyPiece)

        expect(selectPiece).toHaveBeenCalled()
    })

    it("should call swapPieces when piece drops", ()=>{
        render(<Puzzle movements={movements} setMovements={setMovements}  size={2}/>)
        const anyPiece = screen.getByRole("application",{name: "Piece 1, position 1 of 4"})

        fireEvent.drop(anyPiece)

        expect(swapPieces).toHaveBeenCalled()
    })

})