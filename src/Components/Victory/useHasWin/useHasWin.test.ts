import { renderHook } from "@testing-library/react"
import { useHasWin } from "./useHasWin"

const setVictory =  jest.fn()

it("shouldnt change victory state if theres no pieces array",()=>{
    const movements = []
    renderHook(useHasWin, {initialProps: {movements,setVictory}})

    expect(setVictory).not.toHaveBeenCalled()
})

it("should set victory if pieces are sorted", ()=>{
    const movements = [1,2,3,4]
    renderHook(useHasWin, {initialProps: {movements,setVictory}})

    expect(setVictory).toHaveBeenCalledWith(true)

})

it("shouldnt call setVictory if pieces arent sorted", ()=>{
    const movements = [3,1,4,2]
    renderHook(useHasWin, {initialProps: {movements,setVictory}})

    expect(setVictory).not.toHaveBeenCalled()
})