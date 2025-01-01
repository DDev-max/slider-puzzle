import { render, screen } from "@testing-library/react"
import { Victory } from "./Victory"

const setMovements = jest.fn()
const setStopWatch = jest.fn()
const setVictory = jest.fn()
const stopWatch = 65


it("shouldnt render victory if theres no victory", () => {
    const movements = [2, 3, 1, 4]
    const victory = false

    render(<Victory movements={movements} setMovements={setMovements} setStopWatch={setStopWatch} setVictory={setVictory} stopWatch={stopWatch} victory={victory} />)

    const victoryMsg = screen.queryByRole("alert")
    expect(victoryMsg).not.toBeInTheDocument()

})

it("should render a victory msg", ()=>{
    const movements = [1,2,3,4]
    const victory = true

    render(<Victory movements={movements} setMovements={setMovements} setStopWatch={setStopWatch} setVictory={setVictory} stopWatch={stopWatch} victory={victory} />)

    const victoryMsg = screen.getByRole("alert")

    expect(victoryMsg).toBeInTheDocument()
    expect(victoryMsg).toHaveAttribute("aria-atomic","true")
    expect(victoryMsg).toHaveTextContent(/Congratulations! You have solved the puzzle/i)

})