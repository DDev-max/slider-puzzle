import { render, screen } from "@testing-library/react";
import { StopWatch } from './StopWatch';
import { useStopWatchStorage } from './useStopWatchStorage/useStopWatchStorage';
import { useChangeStopWatch } from './useChangeStopWatch/useChangeStopWatch';

jest.mock('./useStopWatchStorage/useStopWatchStorage')
jest.mock('./useChangeStopWatch/useChangeStopWatch')

const setStopWatch = jest.fn()
const stopWatch = 65
const victory =  false

it("should render a stopWatch", ()=>{
    render(<StopWatch setStopWatch={setStopWatch} stopWatch={stopWatch} victory={victory}/>)

    const time = screen.getByRole("timer")

    expect(time).toHaveTextContent( /^1\s*m:\s*5\s*s$/i)
    expect(useStopWatchStorage).toHaveBeenCalled()
    expect(useChangeStopWatch).toHaveBeenCalled()
})