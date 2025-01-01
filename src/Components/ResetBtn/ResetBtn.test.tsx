import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react";
import {ResetBtn} from "./ResetBtn"
import { restartGame } from './resetGame/resetGame';

jest.mock('./resetGame/resetGame')

const setStopWatch =  jest.fn()
const setMovements = jest.fn()
const setVictory =  jest.fn()

it("should call restartGame function when clicking on button", async ()=>{
    const user =  userEvent.setup()
    render(<ResetBtn setMovements={setMovements} setStopWatch={setStopWatch} setVictory={setVictory}/>)
    const btn = screen.getByRole("button", { name: "Restart game"})


    await user.click(btn)

    expect(restartGame).toHaveBeenCalled()

})