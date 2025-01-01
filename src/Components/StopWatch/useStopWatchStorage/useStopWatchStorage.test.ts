import { renderHook } from "@testing-library/react"
import { LS_stopWatch } from "../../../data/consts"
import { useStopWatchStorage } from "./useStopWatchStorage"

const stopWatch = 65
const setStopWatch = jest.fn()

it("should recover previous time if it exists", () => {
    const previousTime = 100

    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
        if (key === LS_stopWatch) {
            return previousTime.toString();
        }
        return null;
    });


    renderHook(useStopWatchStorage, {initialProps: {setStopWatch, stopWatch}})

    expect(setStopWatch).toHaveBeenCalledWith(previousTime)


})

it("shouldnt change stop watch if theres no previous time", ()=>{
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
        if (key === LS_stopWatch) {
            return null;
        }
        return null;
    });

    renderHook(useStopWatchStorage, {initialProps: {setStopWatch, stopWatch}})

    expect(setStopWatch).not.toHaveBeenCalled()
})

it("should save time in storage", ()=>{
    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');

    renderHook(useStopWatchStorage, {initialProps: {setStopWatch, stopWatch}})

    expect(setItemMock).toHaveBeenCalledTimes(1)


})