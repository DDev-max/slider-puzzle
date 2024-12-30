
export function timeConversion(elapsedSeconds) { 


    const minutes = Math.floor(elapsedSeconds / 60)
    const seconds = elapsedSeconds >= 60 ? elapsedSeconds - (60 * minutes) : elapsedSeconds
    

    return { minutes, seconds}

}

