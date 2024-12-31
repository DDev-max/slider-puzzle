import { useState } from "react";
import { ResetBtn } from "../ResetBtn/ResetBtn";
import { StopWatch } from "../StopWatch/StopWatch";
import { Victory } from "../Victory/Victory";

export function Header() {
    const [stopWatch, setStopWatch] = useState(0)


    return (
        <>
            <header className="header">
                <StopWatch setStopWatch={setStopWatch} stopWatch={stopWatch} />
                <ResetBtn setStopWatch={setStopWatch} />
            </header>
            <Victory setStopWatch={setStopWatch} stopWatch={stopWatch} />
        </>

    )
}